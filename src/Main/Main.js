import React from "react";
import { Route, Routes } from "react-router-dom";
import { BrowserRouter as Router, Switch, Link } from "react-router-dom";
import App from "../App";
import "./main.css";
const Main = () => {
  return (
    <div className="main">
    <nav class="navbar">
      

      <ul class="main_nav">
        <li>
        <Link to="/Teams">View Teams</Link>
        </li>
        <li>
        <Link to="/create-team">Create Team</Link>
        </li>
        <li>
        <Link to="/myTeam">View Members</Link>
        </li>
        <li>
        <Link to="/add-member">Add Member</Link>
        </li>
        <li>
        <Link to="/todo">Todo List</Link>
        </li>
      </ul>
    </nav>
    </div>
    // <div className="Main">
    //   <nav className="navbar">
    //     <Link to="/Teams">View Teams</Link>
    //     <Link to="/create-team">Create Team</Link>
    //     <Link to="/myTeam">View Members</Link>
    //     <Link to="/add-member">Add Member</Link>
    //     <Link to="/todo">Todo List</Link>

    //   </nav>
    // </div>
  );
};

export default Main;
