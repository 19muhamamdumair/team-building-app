import React from "react";
import GoogleLogin from "react-google-login";
import Facebook from "./FacebookLogin/Facebook";
import Google from "./GoogleLogin/GoogleLogin";

import "./SocialMediaLogin.css";
const SocialMediaLogin = () => {
  return (
    <div className="socialMediaLogin">
      <div className="row">
        <div className="col">
          {/* <a href="#" className="fb btn" style={{textAlign:'center'}}>
            <i className="fa fa-facebook fa-fw"></i> Login with Facebook
          </a> */}
    <Facebook/>
    <Google/>
          {/* <a href="#" className="google btn" style={{textAlign:'center'}}>
            <i className="fa fa-google fa-fw"></i> Login with Google+
          </a> */}
        </div>
      </div>
    </div>
  );
};

export default SocialMediaLogin;
