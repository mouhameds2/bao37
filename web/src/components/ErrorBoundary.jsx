import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error("Uncaught error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-background text-foreground p-6 text-center">
          <h1 className="text-4xl font-serif text-primary mb-4">Something went wrong</h1>
          <p className="text-muted-foreground mb-8 max-w-md">
            We apologize for the inconvenience. Please try refreshing the page or return home.
          </p>
          <button
            onClick={() => window.location.href = '/'}
            className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors"
          >
            Return Home
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;