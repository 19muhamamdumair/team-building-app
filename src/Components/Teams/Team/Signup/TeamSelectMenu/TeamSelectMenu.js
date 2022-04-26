import React from 'react'
import Option from '../Option'
const SelectMenu = ({selectTitle,list,handleChange}) => {
  return (
    <div className="input-box">
    <span className="details">{selectTitle}</span>
    <select className="my-menu" onChange={handleChange}>
      <option
        value="0"
        style={{ color: "white", backgroundColor: "#333" }}
      >
        {selectTitle}
      </option>
      {list.map((team) => (
        <Option teamName={team.name} key={team.id} id={team.id} />
      ))}
    </select>
  </div>
  )
}

export default SelectMenu