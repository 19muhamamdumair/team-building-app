import React, { useState } from 'react'
import './CheckAll.css'
const CheckAll = ({handleChange}) => {
    const [selectedBox,setSelectedBox]=useState(true)
  return (
    <label className="checkbox-container checkmark-all">
    {/* document.getElementById('checkboxid').checked? handleChange(id,true):handleChange(id,false) */}
    <h6 className="role">Select All</h6>
    <input   className="checkmark " type="checkbox"  onClick={()=>{
        setSelectedBox(!selectedBox)
        // console.log(selectedBox)
        handleChange(selectedBox)
      }}/>
  </label>
  )
}

export default CheckAll