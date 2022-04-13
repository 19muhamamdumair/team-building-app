import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './TodoItem.css'
import * as MemberAction from '../../../Redux/Action/deleteTodo'
const TodoItem = ({todoList,updateId}) => {
    const dispatch=useDispatch()

    // const latestUpdateValue=useSelector(state=>state.todo.todo);
    // console.log({latestUpdateValue})
   console.log({todoList,updateId})
  return (
    <div className="todo">
      <li
        className={`${todoList.done ? "checked" : ""}`}
        onClick={() => updateId(todoList.id, todoList.title)}
      >
        {todoList.title}
        <span
          className="close"
          onClick={() => dispatch(MemberAction.deleteTodo(todoList.id))}
        >
          x
        </span>
      </li>
    </div>
  );
}

export default TodoItem