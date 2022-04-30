import React, { useState } from "react";
import './Login.css';
import { AiOutlineMail } from "react-icons/ai";
import { RiLockPasswordLine } from "react-icons/ri";
import { BiShowAlt } from "react-icons/bi";
import { Link } from "react-router-dom";
import SocialLogin from "../SocialLogin/SocialLogin";

const Login = () => {
  const [passwordType, setPasswordType] = useState(true);
  return (
    <div style={{height:'100vh'}}> 
    <div
      style={{ maxWidth: "600px" }}
      className="mt-5 p-4 mx-auto bg-white shadow"
    >
      <h1 className="text-center my-5">Please Login</h1>
      <form>
        <div className="d-flex align-items-center mb-3">
          <AiOutlineMail
            style={{ height: "30px", width: "30px", marginRight: "15px" }}
          ></AiOutlineMail>
          <input
            className="w-100 p-2 rounded"
            style={{
              borderColor: "#111",
              borderTop: "0",
              borderRight: "0",
              borderLeft: "0",
            }}
            type="email"
            name="email"
            placeholder="User email"
            required
          />
        </div>
        <div className="d-flex align-items-center mb-3 position-relative">
          <RiLockPasswordLine
            style={{ height: "30px", width: "30px", marginRight: "15px" }}
          ></RiLockPasswordLine>
          <input
            className="w-100 p-2 rounded"
            style={{
              borderColor: "#111",
              borderTop: "0",
              borderRight: "0",
              borderLeft: "0",
            }}
            type={passwordType ? "password" : "text"}
            name="password"
            placeholder="Password"
            required
          />
          <BiShowAlt
            style={{ height: "30px", width: "30px", cursor: "pointer" }}
            className="position-absolute end-0 me-3 text-secondary"
            onClick={() => setPasswordType(!passwordType)}
          ></BiShowAlt>
        </div>
        <div className="form-check d-flex justify-content-end">
          <small className="text-primary" role="button">
            <Link to="/register" style={{ textDecoration: "none" }}>
              New to Auto Mart?
            </Link>
          </small>
        </div>
        <div style={{ height: "50px" }}></div>
        <div className="d-flex justify-content-center">
          <button
            className="btn btn-dark mx-auto login-button fs-5"
            style={{ width: "250px" }}
          >
            Submit
          </button>
        </div>
      </form>
      <SocialLogin></SocialLogin>
    </div>
    </div> 
  );
};

export default Login;
