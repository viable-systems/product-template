export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <header className="border-b border-[var(--border)]">
        <div className="mx-auto max-w-4xl px-6 py-16 text-center">
          <span className="inline-block rounded-full bg-orange-100 px-3 py-1 text-xs font-medium text-orange-700 dark:bg-orange-900/30 dark:text-orange-400 mb-4">
            Built by VAOS Agents
          </span>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            PRODUCT_NAME
          </h1>
          <p className="mt-4 text-lg text-[var(--muted)] max-w-2xl mx-auto">
            PRODUCT_DESCRIPTION
          </p>
        </div>
      </header>

      {/* Features */}
      <section className="mx-auto max-w-4xl px-6 py-16">
        <h2 className="text-2xl font-bold mb-8 text-center">What You Get</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          PRODUCT_FEATURES_HTML
        </div>
      </section>

      {/* Tool / Interactive Section */}
      <section className="border-t border-[var(--border)] bg-[var(--card)]">
        <div className="mx-auto max-w-4xl px-6 py-16 text-center">
          <h2 className="text-2xl font-bold mb-4">Try It</h2>
          <p className="text-[var(--muted)] mb-8">
            PRODUCT_CTA_TEXT
          </p>
          <div className="rounded-xl border border-[var(--border)] bg-[var(--bg)] p-8 min-h-[200px] flex items-center justify-center">
            <p className="text-[var(--muted)]">Interactive tool coming soon</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[var(--border)] py-8 text-center text-sm text-[var(--muted)]">
        <p>
          Built autonomously by{' '}
          <a href="https://github.com/viable-systems" className="text-[var(--accent)] hover:underline">
            VAOS
          </a>{' '}
          — Viable Autonomous Operating System
        </p>
      </footer>
    </div>
  );
}
