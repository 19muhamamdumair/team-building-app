import React from "react";
import './Checkbox.css'
const Checkbox = ({ roleName, id,handleChange }) => {

  return (
    <label className="checkbox_container">
      <h6 className="role">{roleName}</h6>
      <input  type="checkbox" onClick={()=>handleChange(id)}/>
      <span className="checkmark"  ></span>
    </label>
  );
};

export default Checkbox;
