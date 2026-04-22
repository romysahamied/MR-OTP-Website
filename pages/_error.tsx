import type { NextPageContext } from 'next'

type ErrorProps = {
  statusCode?: number
}

/**
 * Required in development: Next does not use `pages/500` in dev and instead loads `/_error`.
 * Without this file, refreshes after a server error can show “missing required error components”.
 */
export default function ErrorPage({ statusCode }: ErrorProps) {
  return (
    <div
      style={{
        minHeight: '100vh',
        margin: 0,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '2rem',
        fontFamily: 'system-ui, sans-serif',
        textAlign: 'center',
        background: '#0f172a',
        color: '#e2e8f0',
        gap: '0.75rem',
      }}
    >
      <h1 style={{ fontSize: '1.25rem', fontWeight: 700, margin: 0 }}>
        {statusCode ? `Error ${statusCode}` : 'Something went wrong'}
      </h1>
      <p style={{ maxWidth: '28rem', color: '#94a3b8', margin: 0, fontSize: '0.9rem' }}>
        Please try again or return to the home page.
      </p>
      <a
        href="/"
        style={{
          padding: '0.5rem 1rem',
          borderRadius: '8px',
          background: '#d4af37',
          color: '#0f172a',
          fontWeight: 600,
          textDecoration: 'none',
        }}
      >
        Home
      </a>
    </div>
  )
}

ErrorPage.getInitialProps = ({ res, err }: NextPageContext) => {
  const statusCode = res?.statusCode ?? err?.statusCode ?? 404
  return { statusCode }
}
