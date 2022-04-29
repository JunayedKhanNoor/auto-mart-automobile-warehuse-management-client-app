import React from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom";

const CustomLink = ({ children, to, ...props }) => {
  let resolved = useResolvedPath(to);
  let match = useMatch({ path: resolved.pathname, end: true });
  return (
    <div>
      <Link
        style={{ 
            textDecoration: match ? "underline" : "none",
            letterSpacing: "1px",
            textUnderlineOffset: "10px",
            textDecorationColor: match && "#E78EA9",
            fontSize:"20px",
            fontWeight:'bold',
            color:"#0275d8",
            margin:"0px 8px",
            textDecorationThickness:"3px"
        }}
        to={to}
        {...props}
      >
        {children}
      </Link>
    </div>
  );
};

export default CustomLink;
