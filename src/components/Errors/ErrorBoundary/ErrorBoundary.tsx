import React from "react";
import ErrorMessage from "../ErrorMessage/ErrorMessage";

class ErrorBoundary extends React.Component {
  state = {
    hasError: false
  };

  static getDerivedStateFromErrors() {
    return {
      hasError: true
    };
  }

  render() {
    return this.state.hasError ? (
      <ErrorMessage>An error occured.</ErrorMessage>
    ) : (
      this.props.children
    );
  }
}

export default ErrorBoundary;
