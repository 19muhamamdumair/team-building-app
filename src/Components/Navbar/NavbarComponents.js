import React from 'react'
import { Link } from 'react-router-dom'

const NavbarComponents = ({link}) => {
  return (
    
    <>
    <Link
      to={link.linkName}
      className={`${link.linkName === "/" ? "active" : ""}`}
    >
      {link.title}
    </Link>
   
    </>
  );
}

export default NavbarComponents