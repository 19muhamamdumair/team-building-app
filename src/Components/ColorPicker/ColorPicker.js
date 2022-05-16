import React from 'react'
import './ColorPicker.css'
const ColorPicker = ({selectTitle,handleChange,colorValue}) => {
  return (
    <div className="input-box">
    <span className="details">{selectTitle}</span>
    <input className='colorPicker' type='color' value={colorValue} onChange={handleChange}/>
    </div>
  )
}

export default ColorPicker