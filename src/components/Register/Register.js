import React, { useEffect, useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { RiLockPasswordLine } from "react-icons/ri";
import { BiShowAlt } from "react-icons/bi";
import { Link, useNavigate } from "react-router-dom";
import SocialLogin from "../SocialLogin/SocialLogin";
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import Loading from "../Loading/Loading";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import useToken from "../../hooks/useToken";

const Register = () => {
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
  const [updateProfile, updating, updateError] = useUpdateProfile(auth);
  const [passwordType, setPasswordType] = useState(true);
  const [token] = useToken(user);
  const [accept, setAccept] = useState(true);
  const [myError, setMyError] = useState("");
  const navigate = useNavigate();
  const handleRegister = async(e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const confirmPass = e.target.confirmPassword.value;
    const passwordRegex = /.{8,}/;
    const validPassword = passwordRegex.test(password);
    if (!/^\S+@\S+\.\S+$/.test(email)) {
      setMyError("Invalid email");
    } else if (password !== confirmPass) {
      setMyError("Password and confirm password not same");
    } else if (!validPassword) {
      setMyError("At least 8 character required");
    } else {
      setMyError("");
      await createUserWithEmailAndPassword(email,password);
      await updateProfile({displayName:name});
      toast('Profile Updated');
    }
  };
  useEffect(() => {
    if (token) {
       navigate("/home"); 
      
    }
  }, [token, navigate]); 
  if (loading || updating) {
      return <Loading></Loading>;
  }
  return (
    <div
      style={{ maxWidth: "600px" }}
      className="mt-5 p-4 mx-auto bg-white shadow"
    >
      <h1 className="text-center my-5">Please Register</h1>
      <form onSubmit={handleRegister}>
        <div className="d-flex align-items-center mb-3">
          <FaUserCircle
            style={{ height: "30px", width: "30px", marginRight: "15px" }}
          ></FaUserCircle>
          <input
            className="w-100  p-2 rounded"
            style={{
              borderColor: "#111",
              borderTop: "0",
              borderRight: "0",
              borderLeft: "0",
            }}
            type="text"
            name="name"
            placeholder="User name"
            required
          />
        </div>
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
            name="confirmPassword"
            placeholder="Confirm Password"
            required
          />
          <BiShowAlt
            style={{ height: "30px", width: "30px", cursor: "pointer" }}
            className="position-absolute end-0 me-3 text-secondary"
            onClick={() => setPasswordType(!passwordType)}
          ></BiShowAlt>
        </div>
        <div className="form-check d-flex justify-content-between">
          <div>
            <input
              className="form-check-input"
              type="checkbox"
              id="gridCheck"
              onClick={() => setAccept(!accept)}
            />
            <label className="form-check-label fw-light" htmlFor="gridCheck">
              <small className={accept && "text-danger"}>
                Accept terms & conditions
              </small>
            </label>
          </div>
          <small className="text-primary" role="button">
            <Link to="/login" style={{ textDecoration: "none" }}>
              Already have an account?
            </Link>
          </small>
        </div>
        <div style={{ height: "50px" }}>
          {myError && <small className="text-danger">{myError}</small>}
        </div>
        <div className="d-flex justify-content center">
          <button
            disabled={accept}
            className="btn btn-dark mx-auto fs-5"
            style={{ width: "250px" }}
          >
            Register
          </button>
        </div>
      </form>
      <SocialLogin></SocialLogin>
    </div>
  );
};

export default Register;
