import React from "react";
import { useNavigate } from "react-router-dom";
import error from "../../Images/error.jpg";
import "./NotFound.css";

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <div className="error-container d-flex align-items-end justify-content-center">
      <div className="mt-5">
        <button
          className="btn p-3 manage-btn"
          onClick={() => {
            navigate("/");
          }}
        >
          Go to Home Page
        </button>
      </div>
    </div>
  );
};

export default NotFound;
