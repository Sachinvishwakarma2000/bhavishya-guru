import React, { StrictMode, Component } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Bhavishya Guru caught an error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{
          minHeight: '100vh',
          background: '#050814',
          color: '#f8fafc',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '2rem',
          textAlign: 'center',
          fontFamily: "'Outfit', sans-serif"
        }}>
          <h1 style={{ color: '#fbbf24', fontFamily: "'Cinzel', serif", marginBottom: '1rem', fontSize: '2rem' }}>
            Cosmic Alignment Reset
          </h1>
          <p style={{ maxWidth: '500px', color: '#94a3b8', marginBottom: '1.5rem', lineHeight: '1.6' }}>
            A temporary planetary transit interrupted the render: {this.state.error?.message}
          </p>
          <button
            onClick={() => {
              localStorage.removeItem('bhavishya_user_profile');
              window.location.reload();
            }}
            style={{
              background: 'linear-gradient(135deg, #f59e0b, #d97706)',
              color: '#050814',
              border: 'none',
              padding: '0.8rem 1.6rem',
              borderRadius: '10px',
              fontWeight: '700',
              cursor: 'pointer',
              fontSize: '1rem'
            }}
          >
            Reset Profile & Reload
          </button>
        </div>
      );
    }
    return this.props.children;
  }
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </StrictMode>,
)
