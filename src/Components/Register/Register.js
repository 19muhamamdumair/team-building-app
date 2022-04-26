import React from "react";
import { Link } from "react-router-dom";
import "./Register.css";
const Register = ({ linkName, submit, linkTitle }) => {
 
  return (
    <div className="register">
      <Link to={linkName} onClick={submit}>
        {linkTitle}
      </Link>
    </div>
  );
};

export default Register;
