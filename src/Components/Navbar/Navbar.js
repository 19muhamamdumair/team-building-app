import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import NavbarComponents from "./NavbarComponents";
const Navbar = () => {
  // const [showBar, setShowBar] = useState(false);
  // const shownav = () => {
  //   setShowBar(!showBar);
  // };
  const links = [
    {
      linkName: "/",
      title: "Home",
    },
    {
      linkName: "/Teams",
      title: " View Teams",
    },

    ,
    {
      linkName: "/myTeam",
      title: "View Members",
    },
    {
      linkName: "/todo",
      title: "Todo List",
    },
    {
      linkName: "/login",
      title: "Login",
    },
    {
      linkName: "/registeration",
      title: "Register Yourself",
    }
  ];
  const AdminDropdownLinks = [
    {
      linkName: "/user-role",
      title: "Add User Role",
    },
    {
      linkName: "/assign-role",
      title: "Assign User Role",
    },
  ];
  const SettingDropdownLinks = [
    {
      linkName: "/logout",
      title: "Logout",
    },
   
  ];
  function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }
  var local_username = sessionStorage.getItem("user_name");

  return (
    <div className="body">
      <div className="topnav" id="myTopnav">
        {links.map((link) => {
          if(link.linkName==='/login'||link.linkName==='/registeration')
          {
            // console.log(sessionStorage.getItem('user_name'))
            if(sessionStorage.getItem("user_name"))
            {
          
              return;
            }
            else{
       
              return <NavbarComponents link={link} key={link.linkName} />;
            }
          }
          else if(link.linkName==='/Teams'||link.linkName==='/myTeam'||link.linkName==='/todo')
          {
            if(sessionStorage.getItem("user_name"))
            {
              return <NavbarComponents link={link} key={link.linkName} />;
              
            }
            else{
              return;
            }
          }
          else{
            return <NavbarComponents link={link} key={link.linkName} />;
          }
         
        })}
        {local_username === "umair" ? (
          <>
          <div className="dropdown">
            <button className="dropbtn">
              Admin
              <i className="fa fa-caret-down"></i>
            </button>

            <div className="dropdown-content">
              {AdminDropdownLinks.map((link) => {
                return <NavbarComponents link={link} key={link.linkName} />;
              })}
            </div>
          </div>
          
          </>
        ) : null}
         {local_username !== null ? (
          <>
          <div className="dropdown">
            <button className="dropbtn">
              Settings
              <i className="fa fa-caret-down"></i>
            </button>

            <div className="setting-dropdown-content">
              {SettingDropdownLinks.map((link) => {
                return <NavbarComponents link={link} key={link.linkName} />;
              })}
            </div>
          </div>
          
          </>
        ) : null}
        
        <a className="icon" onClick={myFunction}>
          <i className="fa fa-bars"></i>
        </a>
      </div>
    </div>
  );
};

export default Navbar;
