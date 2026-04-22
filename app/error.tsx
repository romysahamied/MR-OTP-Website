'use client'

/**
 * Root App Router error boundary (wrapping root layout children only).
 * Helps avoid empty / broken fallbacks when a route throws during render.
 */
export default function RootError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <div
      style={{
        minHeight: '50vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '2rem',
        textAlign: 'center',
        gap: '1rem',
        fontFamily: 'system-ui, sans-serif',
        background: '#0f172a',
        color: '#e2e8f0',
      }}
    >
      <h1 style={{ fontSize: '1.25rem', fontWeight: 700, margin: 0 }}>Something went wrong</h1>
      <p style={{ maxWidth: '28rem', color: '#94a3b8', fontSize: '0.9rem', margin: 0 }}>
        {process.env.NODE_ENV === 'development' ? error.message : 'Please try again or return to the home page.'}
      </p>
      <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', justifyContent: 'center' }}>
        <button
          type="button"
          onClick={() => reset()}
          style={{
            padding: '0.5rem 1rem',
            borderRadius: '8px',
            border: 'none',
            background: '#d4af37',
            color: '#0f172a',
            fontWeight: 600,
            cursor: 'pointer',
          }}
        >
          Try again
        </button>
        <a
          href="/"
          style={{
            padding: '0.5rem 1rem',
            borderRadius: '8px',
            border: '1px solid #475569',
            color: '#e2e8f0',
            fontWeight: 600,
            textDecoration: 'none',
          }}
        >
          Home
        </a>
      </div>
      {process.env.NODE_ENV === 'development' ? (
        <p style={{ maxWidth: '32rem', fontSize: '0.75rem', color: '#64748b', marginTop: '1rem' }}>
          If you see missing modules after a bad refresh: stop every dev server (only one process on
          port 3000), then run <code>npm run dev:fresh</code>. Avoid two terminals running{' '}
          <code>npm run dev</code> at once.
        </p>
      ) : null}
    </div>
  )
}
