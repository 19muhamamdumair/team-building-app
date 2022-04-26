import React, { useState } from "react";

import "./Header.css";

const Header = ({addTodo,updateTodo,handleChange,title,headerName}) => {
  
  return (
    <>
      <div id="todo-header" className="header">
        <h2> {headerName}</h2>
        <input type="text" value={title} onChange={handleChange}/>
        <span className='add-button' onClick={addTodo}>Add</span>
        <span className='add-button' onClick={updateTodo} style={{marginRight:'1em'}}>Update</span>
      </div>
    </>
  );
};

export default Header;
