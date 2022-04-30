import React, { useEffect } from "react";
import "./SocialLogin.css";
import { FcGoogle } from "react-icons/fc";
import auth from "../../firebase.init";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import Loading from "../Loading/Loading";
import { useLocation, useNavigate } from "react-router-dom";

const SocialLogin = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  const navigate = useNavigate();
  const location = useLocation();
  let from = location.state?.from?.pathname || "/";
  useEffect(()=>{
    if (user) {
        navigate(from, { replace: true });
    }
  },[user,from,navigate]);
  if (loading) {
    return <Loading></Loading>;
  }
 
  return (
    <div style={{ maxWidth: "600px" }} className="mt-3  mx-auto">
      <div className="d-flex mx-5 justify-content-center align-items-center mb-3">
        <div style={{ height: "1px" }} className="w-50 bg-dark me-2"></div>
        Or
        <div style={{ height: "1px" }} className="w-50 bg-dark ms-2"></div>
      </div>
      <div className="d-flex justify-content-center">
        <button
          className="btn googleButton"
          style={{ width: "250px" }}
          onClick={() => signInWithGoogle()}
        >
          <FcGoogle
            className="me-2"
            style={{ width: "30px", height: "30px" }}
          ></FcGoogle>
          Google Sign in
        </button>
      </div>
      {error && (
        <small
          style={{ textAlign: "center", display: "block" }}
          className="text-danger mt-1"
        >
          {error.message}
        </small>
      )}
    </div>
  );
};

export default SocialLogin;
