'use client'

export default function NotFound() {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '100vh',
      padding: '2rem',
      textAlign: 'center',
      backgroundColor: '#000000',
      color: '#ffffff',
    }}>
      <h1 style={{
        fontSize: '4rem',
        fontWeight: 'bold',
        marginBottom: '1rem',
        background: 'linear-gradient(135deg, #ffffff 0%, rgba(255, 255, 255, 0.8) 100%)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundClip: 'text',
      }}>
        404
      </h1>
      <h2 style={{
        fontSize: '2rem',
        fontWeight: '600',
        marginBottom: '2rem',
        color: '#ffffff',
      }}>
        Page Not Found
      </h2>
      <p style={{
        fontSize: '1.1rem',
        color: 'rgba(255, 255, 255, 0.7)',
        marginBottom: '2rem',
        maxWidth: '600px',
      }}>
        The page you're looking for doesn't exist. It might have been moved, deleted, or you entered the wrong URL.
      </p>
      <a
        href="/"
        style={{
          padding: '0.75rem 1.5rem',
          backgroundColor: '#FF0000',
          color: '#ffffff',
          textDecoration: 'none',
          borderRadius: '6px',
          fontWeight: '600',
          transition: 'all 0.3s ease',
        }}
        onMouseOver={(e) => {
          e.currentTarget.style.backgroundColor = '#CC0000';
          e.currentTarget.style.transform = 'translateY(-2px)';
        }}
        onMouseOut={(e) => {
          e.currentTarget.style.backgroundColor = '#FF0000';
          e.currentTarget.style.transform = 'translateY(0)';
        }}
      >
        Go Home
      </a>
    </div>
  );
}