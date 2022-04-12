import React,{useEffect, useState} from 'react'
import Header from './Header/Header'
import TodoList from './TodoList/TodoList'
import { useDispatch, useSelector } from "react-redux";
import './Todo.css'
import { v4 as uuid } from "uuid";

import * as MemberAction from '../../Redux/Action/createTodo'
import * as MemberAction2 from '../../Redux/Action/updateTodo'
import Navbar from '../Navbar/Navbar';
const Todo = () => {
    const [title,setTitle]=useState('')
    const [userId,setUserId]=useState({id:null})
    const todos = useSelector((state) => state);
    const [latestToList,setLatestToList]=useState([]);
   
   
    const dispatch=useDispatch()
    const handleChange=(e)=>{
        setTitle(e.target.value)
    }
    const addTodo=()=>{
        const newTodo={id:uuid(),title,done:false}
        dispatch(MemberAction.createTodo(newTodo))
    }
    const updateId=(id)=>{
        console.log("UpdateId",id)
        setUserId({
            id:id
        })
        console.log("UserId",userId.id)
    }
    useEffect(()=>{
        setLatestToList(todos)
        console.log("todos.todo.todo",todos)
      },[todos])
    const updateTodo=()=>{
        const newTodo={id:userId.id,title,done:false}
        dispatch(MemberAction2.updateTodo(newTodo))
    }
  return (
      <>
    <Navbar/>
    <div className='content'>
       
        <Header addTodo={addTodo} updateTodo={updateTodo} handleChange={handleChange} title={title}/>
        <TodoList updateId={updateId} todo={latestToList}/>
    </div>
    </>
  )
}

export default Todo