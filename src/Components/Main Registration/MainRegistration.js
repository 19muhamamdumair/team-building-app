import React, { useState, useEffect } from "react";
import InputForm from "../InputForm/InputForm";

import Navbar from "../Navbar/Navbar";
import Register from "../Register/Register";
import image from "../../Images/img_avatar2.png";
import * as UserAction from "../../Redux/Action/createUser";
import { v4 as uuidv4 } from "uuid";
import "../Login/Login.css";
import { useDispatch, useSelector } from "react-redux";
import { Form, Formik, useFormik } from "formik";
import * as Yup from "yup";
import { Link, useNavigate } from "react-router-dom";
import { Navigate } from "react-router-dom";
const MainRegistration = () => {
  let navigate =useNavigate()
  let [flag, setFlag] = useState(false);
  const dispatch = useDispatch();
  const users = useSelector((state) => state.member.members);
  const [data, setData] = useState({
    userName: "",
    email: "",
    password: "",
    confirmPassword: "",
    id: null,
    flag:false
  });
  const formik = useFormik({
    initialValues: {
      userName: "",
      email: "",
      password: "",
      confirmPassword: "",
      id: null,
    },
    validationSchema: Yup.object({
      userName: Yup.string()
        .max(15, "Must be less than 15 charcters")
        .required("Required"),
      email: Yup.string().email("Email is invalid").required("Required"),
      password: Yup.string()
        .min(6, "Must be atleast 6 characters or less")
        .required("Password is required"),
      confirmPassword: Yup.string().oneOf(
        [Yup.ref("password"), null],
        "Password must match"
      ),
    }),

    onSubmit: () => {
   
      setData({
        id: uuidv4(),
        userName: formik.values.userName,
        email: formik.values.email,
        password: formik.values.password,
        confirmPassword: formik.values.confirmPassword,
        flag:true
      });
    },
  });
  useEffect(() => {
   
   
    if (
      (data.userName != "" ||
        data.email != "" ||
        data.password != "" ||
        data.confirmPassword != "")
    ) {
      var isUserExitFlag = false;
      users.map((user) => {
        if (user.email === data.email) {
          alert("Email Already Exists");
  
          isUserExitFlag = true;
        } else if (user.user_name === data.userName) {
          alert("Username Already Exists");
          isUserExitFlag = true;
        }
      });
      if(!isUserExitFlag)
      {
        setFlag(true)
        dispatch(UserAction.createUser(data));
       navigate('https://teammanagementdb.netlify.app/login')
      
      }

    }
    else{
    
    }
  }, [data.flag]);
  
 
  return (
    <>
      <Navbar />

      <div className="container">
        <div className="styling" style={{ color: "white" }}>
          Register Yourself
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

          <div className="user-details">
            <InputForm
              formik={formik}
              detailName="Username"
              value={formik.values.userName}
              name="userName"
              typeName="text"
              placeholder="Enter Username"
            />
            {formik.touched.userName && formik.errors.userName ? (
              <p className="error">{formik.errors.userName}</p>
            ) : null}
            <InputForm
              formik={formik}
              detailName="Email"
              value={formik.values.email}
              name="email"
              typeName="text"
              placeholder="Enter Email"
            />
            {formik.touched.email && formik.errors.email ? (
              <p className="error">{formik.errors.email}</p>
            ) : null}
            <InputForm
              formik={formik}
              detailName="Password"
              value={formik.values.password}
              name="password"
              typeName="password"
              placeholder="Enter your Passowrd"
            />
            {formik.touched.password && formik.errors.password ? (
              <p className="error">{formik.errors.password}</p>
            ) : null}
            <InputForm
              formik={formik}
              detailName="Confirm Password"
              value={formik.values.confirmPassword}
              name="confirmPassword"
              typeName="password"
              placeholder="Confirm Your Password"
            />
            {formik.touched.confirmPassword && formik.errors.confirmPassword ? (
              <p className="error">{formik.errors.confirmPassword}</p>
            ) : null}
          </div>
       
      
          <Register linkName={"https://teammanagementdb.netlify.app/login"} submit={formik.handleSubmit} linkTitle={"REGISTER"} />
        </div>
      </div>
    </>
  );
};

export default MainRegistration;
