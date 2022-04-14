import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import TodoItem from "../TodoItem/TodoItem";
import "./TodoList.css";
const TodoList = ({updateId,todo}) => {
    const todos = useSelector((state) => state.todo.todo);
  useEffect(()=>{

   
  },[todos])
 
  return (
    <ul id="todo-list">
      {todos.map((todo) => {
        return <TodoItem updateId={updateId} todoList={todo} key={todo.id} />;
      })}
    </ul>
  );
};

export default TodoList;
