import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate, useLocation } from "react-router-dom";
import auth from "../../firebase.init";
import Loading from "../Loading/Loading";
import { useSendEmailVerification } from 'react-firebase-hooks/auth';
import { toast } from "react-toastify";

const RequiredAuth = ({ children }) => {
  const [user, loading] = useAuthState(auth);
  const [sendEmailVerification, sending, error] = useSendEmailVerification(
    auth
  );
  const location = useLocation();
  if (loading) {
      return <Loading></Loading>;
  }
  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
  if(user.providerData[0]?.providerId === 'password' && !user.emailVerified){
    return (
        <div className="text-center mt-4">
            <h2 className="text-danger">Your email is not verified</h2>
            <h4>Please verify your email</h4>
            <button className="btn btn-link"
            onClick={async()=>{
                await sendEmailVerification();
                toast("Sent email")
            }}>Sent email verification again.</button>
        </div>
    )
  }

  return children;
};

export default RequiredAuth;
