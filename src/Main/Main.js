import React from "react";
import { Route, Routes } from "react-router-dom";
import { BrowserRouter as Router, Switch, Link } from "react-router-dom";
import App from "../App";
import "./main.css";
const Main = () => {
  return (
    <div className="Main">
      <nav className="navbar">
        <Link to="/Teams">Teams</Link>
      </nav>
    </div>
  );
};

export default Main;
