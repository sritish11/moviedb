import * as React from "react";

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }


  componentDidCatch(error, info) {
    console.error('Error caught by Error Boundary:', error);
    console.error('Component stack:', info.componentStack);
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return (
        <img src="https://upload.wikimedia.org/wikipedia/commons/a/a3/Image-not-found.png?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=original" />
      );
    }

    return this.props.children;
  }
}
