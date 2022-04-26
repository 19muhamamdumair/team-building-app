import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './RoleItem.css'
const RoleItem = ({roleList,updateId,deleteRole}) => {
    const dispatch=useDispatch()
  return (
    <div className="todo">
      <li
        className={`${roleList.done ? "checked" : ""}`}
        onClick={() => updateId(roleList.id, roleList.roleName)}
      >
        {roleList.roleName}
        <span
          className="close"
          onClick={() => deleteRole(roleList.id)}
        >
          x
        </span>
      </li>
    </div>
  );
}

export default RoleItem