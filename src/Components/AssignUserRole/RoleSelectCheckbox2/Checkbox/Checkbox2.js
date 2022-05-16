import React, { useEffect, useState } from "react";
import './Checkbox2.css'
const Checkbox = ({ roleName, id,handleChange,flag }) => {
  // console.log({ roleName, id})
  const [selectedBox,setSelectedBox]=useState(true)
 
  return (
    <label className="checkbox-container">
      {/* document.getElementById('checkboxid').checked? handleChange(id,true):handleChange(id,false) */}
      <h6 className="role">{roleName}</h6>
      <input id="checkboxid"  className="checkmark" type="checkbox" onChange={e => {}} checked={flag ? true:false}  onClick={()=>{
       
          setSelectedBox(!selectedBox)
          console.log("hello")
          handleChange(id,selectedBox)
        
      
      }} />
    </label>
  );
};

export default Checkbox;
