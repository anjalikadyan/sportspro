import { Component } from 'react';

export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError() { return { hasError: true }; }
  componentDidCatch(error, info) { console.error('SportsPro UI error:', error, info); }
  render() {
    if (this.state.hasError) {
      return <main className="flex min-h-screen items-center justify-center bg-background px-6 text-foreground"><section className="max-w-md text-center"><p className="text-sm font-semibold uppercase tracking-[.2em] text-primary">SportsPro</p><h1 className="mt-4 font-display text-3xl font-extrabold">Something went offside.</h1><p className="mt-3 text-muted-foreground">The page hit an unexpected error. Try reloading to continue.</p><button className="mt-6 rounded-full bg-primary px-5 py-3 font-semibold text-white transition hover:-translate-y-0.5" onClick={() => window.location.reload()}>Reload application</button></section></main>;
    }
    return this.props.children;
  }
}
