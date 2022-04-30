import React from "react";
import { Spinner } from "react-bootstrap";

const Loading = () => {
  return (
    <div
      style={{ height: "80vh" }}
      className="w-100 d-flex justify-content-center align-items-center"
    >
      <button className="btn btn-white" disabled>
        <Spinner animation="border" variant="dark" />
       <span className="fs-3 ms-2 mb-2">Loading...</span> 
      </button>
    </div>
  );
};

export default Loading;
