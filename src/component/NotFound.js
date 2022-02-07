import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div style={{ textAlign: "center" }}>
      <h1>Page not Found</h1>
      <Link to="/">Click here move to login</Link>
    </div>
  );
};

export default NotFound;
