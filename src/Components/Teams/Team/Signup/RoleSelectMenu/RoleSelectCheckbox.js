import React from "react";
import Option from "../Option";
import Checkbox from "./Checkbox/Checkbox";
const RoleSelectMenu = ({ selectTitle, list, handleChange }) => {
  return (
    <div className="input-box">
      <span className="details" style={{display:'block',marginBottom:'.5em'}}>{selectTitle}</span>
      
      <div className="mycheckbox" style={{display:'flex',flexDirection:'row',flexWrap:'wrap'}}>
      
      {list.map((role) => (
         <Checkbox roleName={role.roleName} key={role.id} id={role.id} handleChange={handleChange}/>
      ))}
      </div>
     
      
    </div>
  );
};

export default RoleSelectMenu;
