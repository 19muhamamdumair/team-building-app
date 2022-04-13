import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import NavbarComponents from "./NavbarComponents";
const Navbar = () => {
  // const [showBar, setShowBar] = useState(false);
  // const shownav = () => {
  //   setShowBar(!showBar);
  // };
  const links=[
    {
      linkName:'/Teams',
      title:' View Teams'
    },
   
    ,
    {
      linkName:'/myTeam',
      title:'View Members'
    }
   ,
    {
      linkName:'/todo',
      title:'Todo List'
    }
  ]
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
      {links.map((link)=>{
        
        return <NavbarComponents link={link} key={link.linkName}/>
      })}
  <a href="javascript:void(0);" className="icon" onClick={myFunction}>
    <i className="fa fa-bars"></i>
  </a>
</div>
</div>
    // <nav className="navbar">
    //   <button className="navbar_toggle" onClick={shownav}>
    //     <i id="bar" className="fas fa-bars"></i>
    //   </button>

    //   {showBar ? (
    //     <ul className="main_nav">
    //       <li>
    //    linkName
    //       </li>
    //       <li>
    //         <Link to="/create-team">Create Team</Link>
    //       </li>
    //       <li>
    //         <Link to="/myTeam">View Members</Link>
    //       </li>
    //       <li>
    //         <Link to="/add-member">Add Member</Link>
    //       </li>
    //       <li>
    //         <Link to="/todo">Todo List</Link>
    //       </li>
    //     </ul>
    //   ) : null}
    // </nav>
  );
};

export default Navbar;
