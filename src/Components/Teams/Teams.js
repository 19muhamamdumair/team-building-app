import React, { useState } from "react";
import Team from "./Team/Team";
import './Teams.css'
import { useSelector } from "react-redux";
import avatar from "../../Images/img_avatar.png";
import { Link } from "react-router-dom";
const Teams = () => {
  const teams = useSelector((state) => state.team.teams);

  const handleMembers = () => {
    console.log("handle Members");
  };
  return (
    <>
      {/* <button onClick={handleMembers}>View Members</button> */}
      {/*  style={{textDecoration:"none",border:'1px solid black',backgroundColor:'green',textAlign:'center'}} */}
      <div className="navbar">
        <Link to="/myTeam" style={{ textDecoration: "none" }}>
          View Members
        </Link>
      </div>
      <table>
        <thead>
          <tr>
            <th>Team Name</th>
            <th>Total Members</th>
          </tr>
        </thead>
        <tbody>
          {teams.map((team) => (
            <Team
              key={team.id}
              id={team.id}
              TeamName={team.name}
              TotalCount={team.member_count}
            />
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Teams;
