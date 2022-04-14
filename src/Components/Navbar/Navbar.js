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
  ];
  function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }

  return (
    <div className="body">
      <div className="topnav" id="myTopnav">
        {links.map((link) => {
          return <NavbarComponents link={link} key={link.linkName} />;
        })}
        <a className="icon" onClick={myFunction}>
          <i className="fa fa-bars"></i>
        </a>
      </div>
    </div>
   

   
  );
};

export default Navbar;
