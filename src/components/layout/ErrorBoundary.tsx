import React from 'react';

type State = {hasError: boolean;};

export class ErrorBoundary extends React.Component<{children: React.ReactNode;}, State> {
  state: State = { hasError: false };

  static getDerivedStateFromError(): State {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return (
        <section className="flex min-h-[70vh] items-center bg-forest px-5 pt-32 text-ivory">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="font-serif text-5xl">Something paused unexpectedly.</h1>
            <p className="mt-6 text-ivory/70">Please refresh the page. If this continues, reach out to us and we will help.</p>
            <a href="/" className="mt-10 inline-block rounded-full bg-gold px-7 py-4 text-xs font-semibold uppercase tracking-[0.16em] text-emerald">
              Return home
            </a>
          </div>
        </section>);

    }
    return this.props.children;
  }
}