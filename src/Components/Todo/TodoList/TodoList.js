import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import TodoItem from "../TodoItem/TodoItem";
import "./TodoList.css";
const TodoList = ({updateId,todos,deleteTask}) => {

 
  return (
    <ul id="todo-list">
      {todos.map((todo) => {
        return <TodoItem updateId={updateId} todoList={todo} key={todo.id} deleteTask={deleteTask} />;
      })}
    </ul>
  );
};

export default TodoList;
