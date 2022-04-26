import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import RoleItem from "../RoleItem/RoleItem";
import "./RoleList.css";
const TodoList = ({updateId,roles,deleteRole}) => {
  //   const todos = useSelector((state) => state.todo.todo);
  // useEffect(()=>{

   
  // },[todos])
 
  return (
    <ul id="todo-list">
      {roles.map((role) => {
        return <RoleItem updateId={updateId} roleList={role} key={role.id} deleteRole={deleteRole}/>;
      })}
    </ul>
  );
};

export default TodoList;
