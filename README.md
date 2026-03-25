# product-template

A Next.js starter template for building single-purpose AI analysis tools. Ships with a landing page, a tool page with text input, and a `/api/analyze` endpoint that sends user input to Claude (claude-haiku-4-5) and returns structured JSON results (summary, findings, recommendations, score).

Designed to be cloned and customized by replacing placeholder strings (`PRODUCT_NAME`, `PRODUCT_SLUG`, `PRODUCT_DESCRIPTION`, `PRODUCT_SYSTEM_PROMPT`).

## Stack

| Dependency | Version |
|------------|---------|
| Next.js | 15.4 |
| React | 19.1 |
| Tailwind CSS | 4.0 |
| @anthropic-ai/sdk | 0.39 |
| TypeScript | 5.8 |

## Structure

```
src/
  app/
    page.tsx              # Landing page with hero, features, CTA
    tool/page.tsx         # Main tool UI (text input + results display)
    api/analyze/route.ts  # POST endpoint: sends input to Claude, returns JSON
    layout.tsx            # Root layout
    globals.css           # Tailwind + CSS variables
  lib/
    types.ts              # Shared TypeScript types
```

## Setup

```bash
cp .env.local.example .env.local
# Add your ANTHROPIC_API_KEY to .env.local
npm install
npm run dev
```

The app runs on `http://localhost:3000`. The `/api/analyze` endpoint requires a valid Anthropic API key.

## How It Works

1. User pastes text into the tool page
2. Client POSTs to `/api/analyze` with the input (truncated to 15,000 chars)
3. Server calls Claude Haiku with a system prompt and returns structured JSON
4. Client renders findings with severity ratings and a score (0-100)

## Customization

Replace these placeholders in the codebase:

| Placeholder | Where | Purpose |
|-------------|-------|---------|
| `PRODUCT_NAME` | page.tsx, layout.tsx | Display name |
| `PRODUCT_SLUG` | package.json | npm package name |
| `PRODUCT_DESCRIPTION` | page.tsx | Hero subtitle |
| `PRODUCT_SYSTEM_PROMPT` | api/analyze/route.ts | Claude system prompt |

## Limitations

- No authentication or rate limiting
- No database or persistence
- System prompt is an empty placeholder
- Input truncated to 15k characters
- Single model (Haiku) hardcoded

## License

No license specified.