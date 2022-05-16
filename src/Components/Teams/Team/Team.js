import React from "react";
import "./Team.css";
import { Link } from "react-router-dom";
const Team = ({ teamColor,teamId,avatar, TeamName, TotalCount }) => {
  return (
   
        <tr >
          <td>{TeamName}</td>
          <td>{TotalCount}</td>
          <td>
          <button style={{width:'150px',height:'50px'}}>
             <Link to="/update-team" state={{teamId:teamId}} style={{textDecoration:"none",color:'white'}} >Edit Team</Link>
             </button>
             {/* <Link to="/myTeam" style={{textDecoration:"none"}} >Join Now!</Link> */}
          </td>
        </tr>      
  );
};

export default Team;
