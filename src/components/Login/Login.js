import React, { useEffect, useRef, useState } from "react";
import "./Login.css";
import { AiOutlineMail } from "react-icons/ai";
import { RiLockPasswordLine } from "react-icons/ri";
import { BiShowAlt } from "react-icons/bi";
import { Link, useLocation, useNavigate } from "react-router-dom";
import SocialLogin from "../SocialLogin/SocialLogin";
import {
  useSendPasswordResetEmail,
  useSignInWithEmailAndPassword,
} from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import Loading from "../Loading/Loading";
import { toast } from "react-toastify";
import axios from "axios";
import useToken from "../../hooks/useToken";

const Login = () => {
  const [passwordType, setPasswordType] = useState(true);
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const [sendPasswordResetEmail, sending, errorReset] =
    useSendPasswordResetEmail(auth);
  const [token] = useToken(user);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const emailRef = useRef("");
  const passwordRef = useRef("");
  let errorElement;
  if (error) {
    errorElement = <small className="text-danger">{error.message}</small>;
  }
  const handleLogin = async (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    console.log(email, password);
    await signInWithEmailAndPassword(email, password);
  };
  const resetPassword = async (e) => {
    const email = emailRef.current.value;
    if (email) {
      await sendPasswordResetEmail(email);
      toast("Sent email");
    } else {
      toast("Please give your email");
    }
  };
  useEffect(() => {
    if (token) {
      navigate(from, { replace: true });
    }
  }, [from, token, navigate]);
  if (loading || sending) {
    return <Loading></Loading>;
  }
  return (
    <div style={{ height: "100vh" }}>
      <div
        style={{ maxWidth: "600px" }}
        className="mt-5 p-4 mx-auto bg-white shadow logIn-container"
      >
        <h1 className="text-center my-5">Please Login</h1>
        <form onSubmit={handleLogin}>
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
              ref={emailRef}
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
              ref={passwordRef}
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
          <div className="form-check d-flex justify-content-between">
            <p className="login-text">
              Forgot Password?{" "}
              <span
                onClick={resetPassword}
                className="text-primary text-decoration-underline"
                role="button"
              >
                Reset password
              </span>
            </p>
            <p className="text-primary login-text" role="button">
              <Link to="/register" style={{ textDecoration: "none" }}>
                New to Auto Mart?
              </Link>
            </p>
          </div>
          <div style={{ height: "50px" }}>{errorElement}</div>
          <div className="d-flex justify-content-center">
            <button
              className="btn btn-dark mx-auto login-button fs-5"
              style={{ width: "250px" }}
            >
              Login
            </button>
          </div>
        </form>
        <SocialLogin></SocialLogin>
      </div>
    </div>
  );
};

export default Login;
