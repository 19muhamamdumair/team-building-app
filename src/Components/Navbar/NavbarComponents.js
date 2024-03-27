import React from 'react'
import { Link } from 'react-router-dom'

const NavbarComponents = ({link}) => {
  return (
    
    <>
    <Link
      to={link.linkName}
      className={`${link.linkName === "https://teammanagementdb.netlify.app" ? "active" : ""}`}
    >
      {link.title}
    </Link>
   
    </>
  );
}

export default NavbarComponents