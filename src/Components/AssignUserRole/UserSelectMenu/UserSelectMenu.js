import React from 'react'
import UsersOption from '../UsersOption/UsersOption'
const UserSelectMenu = ({selectTitle,list,handleChange}) => {
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
      {list.map((user) => (
        <UsersOption userName={user.user_name} key={user.user_id} id={user.user_id} />
      ))}
    </select>
  </div>
  )
}

export default UserSelectMenu