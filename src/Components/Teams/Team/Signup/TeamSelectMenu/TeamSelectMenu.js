import React from 'react'
import Option from '../Option'
const SelectMenu = ({selectTitle,list,handleChange,flag}) => {
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
        //team can be color or team name
        <Option   teamName={`${flag === "teamName" ? team.name : team}`} key={team.id} id={team.id} />
      ))}
    </select>
  </div>
  )
}

export default SelectMenu