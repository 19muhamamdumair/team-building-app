import React, { useEffect, useState } from "react";
import Header from "./Header/Header";
import TodoList from "./TodoList/TodoList";
import { useDispatch, useSelector } from "react-redux";
import "./Todo.css";
import { v4 as uuid } from "uuid";

import * as MemberAction from "../../Redux/Action/createTodo";

import Navbar from "../Navbar/Navbar";
const Todo = () => {
  const [title, setTitle] = useState("");
  const [isUpdated, setIsUpdated] = useState(true);
  const [userId, setUserId] = useState({ id: null });
  const todos = useSelector((state) => state.todo.todo);
  const [deleteTaskId, setDeleteId] = useState(null);

  const dispatch = useDispatch();
  const handleChange = (e) => {
    setTitle(e.target.value);
  };
  const addTodo = () => {
    if (title !== "") {
      const newTodo = { id: uuid(), title, done: false };
      dispatch(MemberAction.createTodo(newTodo));
    } else {
      alert("Input your task");
    }
    setTitle("")
  };
  const updateId = (id, title) => {
    
    // debugger
    if(deleteTaskId===null)
    {
      setUserId({
        id: id,
      });
      setTitle(title);
    
    }
    else{
      setDeleteId(null)
    }

    
    };
  const updateTodo = () => {
    if (userId.id !== null) {
      const newTodo = { id: userId.id, title, done: false };
      dispatch(MemberAction.updateTodo(newTodo));
      setIsUpdated(!isUpdated);
      setUserId({
        id:null
      })
    } else {
      alert("Select task to update");
    }
    setTitle("")
  };
  async function deleteTask(id) {
    // debugger
    let promise = new Promise((resolve, reject) => {
      setDeleteId(id)
      setTimeout(() => resolve(setTitle("")), 1000)
    });
    let res = await promise; // wait until the promise resolves (*)
    
    dispatch(MemberAction.deleteTodo(id))
  
  }
  // const deleteTask=async=(id)=>{
  //   await(()=> setDeleteId(id),
  //   console.log("deleting",deleteTaskId),
  // dispatch(MemberAction.deleteTodo(id)))
   

  // }
  // useEffect(() => {
  //   setLatestToList(todos);
  // }, [todos]);
  return (
    <>
      <Navbar />
      <div className="content">
        <Header
          addTodo={addTodo}
          updateTodo={updateTodo}
          handleChange={handleChange}
          title={title}
          headerName="Create Todo Task"
        />
        <TodoList updateId={updateId} todos={todos} deleteTask={deleteTask}/>
      </div>
    </>
  );
};

export default Todo;
