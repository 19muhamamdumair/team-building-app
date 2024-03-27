import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Login from "../Login/Login";
import SplashScreen from "../SplashScreen/SplashScreen";
import "./Logout.css";
const Logout = () => {
  const navigate = useNavigate();
  useEffect(() => {

    sessionStorage.clear();
    {setTimeout(navigateLogin, 2000)}
  }, []);
  const navigateLogin = () => {
 
   
    navigate("/login");
  };
  
  return (
    <>
      
      
      <SplashScreen/>

    </>
  );
};

export default Logout;
