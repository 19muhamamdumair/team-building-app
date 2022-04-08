import React from "react";
import "./Team.css";
import { Link } from "react-router-dom";
const Team = ({ avatar, TeamName, TotalCount }) => {
  return (
   
        <tr >
          <td>{TeamName}</td>
          <td>{TotalCount}</td>
          <td>
         
             {/* <Link to="/signup" style={{textDecoration:"none"}} >Join Now!</Link> */}
             {/* <Link to="/myTeam" style={{textDecoration:"none"}} >Join Now!</Link> */}
          </td>
        </tr>      
  );
};

export default Team;
