import React from 'react';
import type { ReactNode, ErrorInfo } from 'react';

interface ErrorBoundaryProps {
  children: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
  error?: Error;
  errorInfo?: ErrorInfo;
}

export class ErrorBoundary extends React.Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    this.setState({ error, errorInfo });

    // Você pode logar em serviços de erro como Sentry aqui também
    console.error('Erro capturado pelo ErrorBoundary:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div
          style={{
            padding: '1rem',
            fontFamily: 'sans-serif',
            color: 'black',
            backgroundColor: 'white',
            background: 'white',
            height: '97vh',
          }}
        >
          <h1>Algo deu errado ao renderizar.</h1>
          {this.state.error && (
            <p>
              <strong>Erro:</strong> {this.state.error.message}
            </p>
          )}
          {this.state.errorInfo && (
            <details style={{ whiteSpace: 'pre-wrap', marginTop: '1rem' }}>
              {this.state.errorInfo.componentStack}
            </details>
          )}
        </div>
      );
    }

    return this.props.children;
  }
}
