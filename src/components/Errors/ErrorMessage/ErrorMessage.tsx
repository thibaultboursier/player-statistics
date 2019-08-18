import React from "react";
import Alert from "react-bootstrap/Alert";

const ErrorMessage: React.FC = ({ children }) => (
  <Alert variant="danger">
    <Alert.Heading>Sorry :-(</Alert.Heading>
    {children}
  </Alert>
);

export default ErrorMessage;
