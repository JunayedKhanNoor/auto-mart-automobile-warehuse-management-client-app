import React, { useState } from 'react';
import { FaUserCircle } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { RiLockPasswordLine } from "react-icons/ri";
import { BiShowAlt } from "react-icons/bi";
import { Link } from 'react-router-dom';
import SocialLogin from '../SocialLogin/SocialLogin';

const Register = () => {
    const [passwordType, setPasswordType] = useState(true);
    const [accept, setAccept] = useState(false);
    return (
      <div
        style={{ maxWidth: "600px" }}
        className="mt-5 p-4 mx-auto bg-white shadow"
      >
        <h1 className="text-center my-5">Please Register</h1>
        <form>
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
                <small className={!accept && "text-danger"}>
                  Accept terms & conditions
                </small>
              </label>
            </div>
            <small className="text-primary" role="button"><Link to='/login' style={{textDecoration:'none'}}>Already have an account?</Link></small>
          </div>
          <div style={{ height: "50px" }}></div>
          <div className="d-flex justify-content center">
            <button
              disabled={!accept}
              className="btn btn-dark mx-auto fs-5"
              style={{ width: "250px" }}
            >
              Submit
            </button>
          </div>
        </form>
        <SocialLogin></SocialLogin>
      </div>
    );
};

export default Register;