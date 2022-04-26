import React from 'react'
import './TodoItem.css'
const TodoItem = ({todoList,updateId,deleteTask}) => {
 
  return (
    <div className="todo">
      <li
        className={`${todoList.done ? "checked" : ""}`}
        onClick={() => updateId(todoList.id, todoList.title)}
      >
        {todoList.title}
        <span
          className="close"
          onClick={() => deleteTask(todoList.id)}
          // onClick={() => dispatch(MemberAction.deleteTodo(todoList.id))}
        >
          x
        </span>
      </li>
    </div>
  );
}

export default TodoItem