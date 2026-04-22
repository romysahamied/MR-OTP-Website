'use client'

/** Keep this file dependency-free (no @/ imports) so the error chunk can always load during HMR. */

export default function BulkSmsZambiaError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <div
      style={{
        minHeight: '40vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '2rem',
        color: '#0f172a',
        background: '#f8fafc',
        textAlign: 'center',
        gap: '1rem',
      }}
    >
      <h1 style={{ fontSize: '1.25rem', fontWeight: 700 }}>Could not load this page</h1>
      <p style={{ maxWidth: '32rem', color: '#64748b', fontSize: '0.95rem' }}>
        {process.env.NODE_ENV === 'development'
          ? error.message
          : 'Please refresh the page or return home and try again.'}
      </p>
      <p style={{ maxWidth: '32rem', color: '#94a3b8', fontSize: '0.8125rem' }}>
        If you see “Cannot find module” for a number.js file, stop the dev server, run{' '}
        <code style={{ background: '#e2e8f0', padding: '0.15rem 0.4rem', borderRadius: '4px' }}>
          npm run clean
        </code>{' '}
        then{' '}
        <code style={{ background: '#e2e8f0', padding: '0.15rem 0.4rem', borderRadius: '4px' }}>
          npm run dev
        </code>
        . For a clean rebuild:{' '}
        <code style={{ background: '#e2e8f0', padding: '0.15rem 0.4rem', borderRadius: '4px' }}>
          npm run dev:fresh
        </code>
        . Optional:{' '}
        <code style={{ background: '#e2e8f0', padding: '0.15rem 0.4rem', borderRadius: '4px' }}>
          npm run dev:turbo
        </code>
        .
      </p>
      <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', justifyContent: 'center' }}>
        <button
          type="button"
          onClick={reset}
          style={{
            padding: '0.5rem 1rem',
            borderRadius: '8px',
            border: '1px solid #cbd5e1',
            background: '#fff',
            cursor: 'pointer',
            fontWeight: 600,
          }}
        >
          Try again
        </button>
        <a
          href="/bulk-sms-zambia"
          style={{
            padding: '0.5rem 1rem',
            borderRadius: '8px',
            background: '#0f172a',
            color: '#fff',
            fontWeight: 600,
            textDecoration: 'none',
          }}
        >
          Zambia home
        </a>
        <a href="/?nav=zambia" style={{ padding: '0.5rem 1rem', color: '#0f172a', fontWeight: 600 }}>
          Mr-OTP home
        </a>
      </div>
    </div>
  )
}
