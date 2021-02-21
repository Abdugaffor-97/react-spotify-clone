import React from "react";
import { Alert, Spinner } from "react-bootstrap";

export const CustomAlert = (messsage) => {
  return (
    <div>
      <Alert variant="danger">{messsage}</Alert>
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
