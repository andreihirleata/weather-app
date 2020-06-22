import React from "react";
import "../styles/display-error.css";

const DisplayError = (props) => {
  return (
    <div className="error">
      <span>{props.error}</span>
    </div>
  );
};

export default DisplayError;
