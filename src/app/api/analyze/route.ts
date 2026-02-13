import Anthropic from '@anthropic-ai/sdk';
import { NextResponse } from 'next/server';

const SYSTEM_PROMPT = `PRODUCT_SYSTEM_PROMPT`;

export async function POST(request: Request) {
  try {
    const apiKey = process.env.ANTHROPIC_API_KEY;
    if (!apiKey) {
      return NextResponse.json(
        { error: 'AI service not configured. Set ANTHROPIC_API_KEY in environment variables.' },
        { status: 503 }
      );
    }

    const body = await request.json();
    const input = body?.input;
    if (!input || typeof input !== 'string' || !input.trim()) {
      return NextResponse.json({ error: 'Input text is required' }, { status: 400 });
    }

    const client = new Anthropic({
      apiKey,
      baseURL: process.env.ANTHROPIC_BASE_URL || undefined,
    });

    const message = await client.messages.create({
      model: 'claude-haiku-4-5-20251001',
      max_tokens: 2048,
      system: SYSTEM_PROMPT,
      messages: [{ role: 'user', content: input.slice(0, 15000) }],
    });

    const text = message.content
      .filter((b) => b.type === 'text')
      .map((b) => (b as { type: 'text'; text: string }).text)
      .join('');

    // Extract JSON from response
    const jsonMatch = text.match(/\{[\s\S]*\}/);
    if (!jsonMatch) {
      return NextResponse.json(
        { error: 'Failed to parse analysis results' },
        { status: 500 }
      );
    }

    const result = JSON.parse(jsonMatch[0]);

    // Ensure required fields exist
    return NextResponse.json({
      summary: result.summary || 'Analysis complete.',
      findings: Array.isArray(result.findings) ? result.findings : [],
      recommendations: Array.isArray(result.recommendations) ? result.recommendations : [],
      score: typeof result.score === 'number' ? Math.min(100, Math.max(0, result.score)) : 50,
    });
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : 'Analysis failed';
    console.error('Analysis error:', err);
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
