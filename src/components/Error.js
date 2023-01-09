import React from "react";

const Error = () => {
  const errorStyle = {
    display: "flex",
    alignItems: "center",
    margin: "7em",
    padding: "8em",
    justifyContent: "center",
  };
  return (
    <div className="error" style={errorStyle}>
      <h1> Oops! Page Not Found!</h1>
    </div>
  );
};

export default Error;
