import React from "react";
import Checkbox from "./Checkbox/Checkbox2";
const RoleSelectMenu2 = ({ selectTitle, list, handleChange,flag }) => {
  return (
    <div className="input-box">
      <span className="details" style={{display:'block',marginBottom:'.5em'}}>{selectTitle}</span>
      
      <div className="mycheckbox" style={{display:'flex',flexDirection:'row',flexWrap:'wrap'}}>
      
      {list.map((role) => (
         <Checkbox roleName={role.roleName} key={role.id} id={role.id} handleChange={handleChange} flag={flag}/>
      ))}
      </div>
     
      
    </div>
  );
};

export default RoleSelectMenu2;
