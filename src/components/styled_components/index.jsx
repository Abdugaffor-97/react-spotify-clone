import React from "react";
import { Alert, Spinner } from "react-bootstrap";

export const CustomAlert = (error) => {
  return (
    <div>
      <Alert variant="danger">{error}</Alert>
    </div>
  );
};

export const CustomSpinner = () => {
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <Spinner animation="border" variant="success" />
    </div>
  );
};
