import { Component } from 'react';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { error: null };
  }

  static getDerivedStateFromError(error) {
    return { error };
  }

  render() {
    if (this.state.error) {
      return (
        <div
          style={{
            minHeight: '100vh',
            padding: '48px 32px',
            background: '#0e0e0e',
            color: '#ffffff',
            fontFamily: 'Inter, sans-serif',
          }}
        >
          <h1 style={{ color: '#e8440a', marginBottom: '16px' }}>Something went wrong</h1>
          <p style={{ color: '#888', marginBottom: '24px' }}>
            {this.state.error.message || 'An unexpected error occurred.'}
          </p>
          <a
            href="/"
            style={{
              color: '#e8440a',
              textDecoration: 'underline',
            }}
          >
            Return to home
          </a>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
