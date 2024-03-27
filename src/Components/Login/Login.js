import React, { useCallback, useState } from "react";
import { Formik, Form, Field } from "formik";
import image from "../../Images/img_avatar2.png";
import InputForm from "../InputForm/InputForm";
import Navbar from "../Navbar/Navbar";
import Register from "../Register/Register";
import * as Yup from "yup";
import "./Login.css";
import TextField from "./TextField";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import SocialMediaLogin from "./SocialMediaLogin/SocialMediaLogin";

const Login = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const users = useSelector((state) => state.member.members);
  const navigate = useNavigate();
  const changeUserName = (e) => {
    setUserName(e.target.value);
  };
  const changePassword = (e) => {
    setPassword(e.target.value);
  };
  const submit = (e) => {
    let flag = true;

    users.map((user) => {
      if (user.user_name === userName && password === user.password) {
        flag = false;
        sessionStorage.setItem("user_name", userName);
        sessionStorage.setItem("password", password);

        setTimeout(navigateMyTeam, 2000);
      }
    });
    if (flag === true) {
      alert("Wrong Username or Password");
      e.preventDefault();
    } else {
      setTimeout(navigateLoading, 0);
    }
  };
  const navigateLoading = () => {
    navigate("/loading...");
  };
  const navigateMyTeam = () => {
    navigate("/myTeam");
  };

  return (
    <>
      <Navbar />

      <div className="container">
        <div className="styling" style={{ color: "white" }}>
          Enter Details to Login
        </div>

        <div
          className="content"
          style={{ border: "1px solid black", padding: "10px" }}
        >
          <div className="imgcontainer">
            <img
              src={image}
              alt="Avatar"
              className="avatar"
              style={{ width: "20%", borderRadius: "50%" }}
            />
          </div>

          <form>
            <div className="user-details">
              <SocialMediaLogin/>
              {/* <Form> */}
              <TextField
                label="Username"
                name="userName"
                type="text"
                functionName={changeUserName}
              />
              <TextField
                label="Password"
                name="password"
                type="password"
                functionName={changePassword}
              />
              {/* <InputForm detailName="Username" typeName="text" placeholder="Enter Username" functionName={change}/>
              <InputForm detailName="Password" typeName="password" placeholder="Enter Password" functionName={change}/>
              </Form> */}
            </div>

            <Register linkName={"/"} submit={submit} linkTitle={"LOGIN"} />
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
