import React from "react";
import "./SocialLogin.css";
import { FcGoogle } from "react-icons/fc";
import auth from "../../firebase.init";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";

const SocialLogin = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  return (
    <div className="mt-3">
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
    </div>
  );
};

export default SocialLogin;
