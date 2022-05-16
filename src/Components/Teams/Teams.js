import React, { useState } from "react";
import Team from "./Team/Team";
import "./Teams.css";
import { useSelector } from "react-redux";
import avatar from "../../Images/img_avatar.png";
import { Link } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
const Teams = () => {
  const teams = useSelector((state) => state.team.teams);

  return (
    <>
      <Navbar />
      <div className="button button-add-team" >
        <Link to="/create-team" >
          
          Add Team
          
          </Link>
      </div>
      {/* <div className="button button-update-team" >
        <Link to="/update-team">Update Team</Link>
      </div> */}
      <table className="teams">
        <thead>
          <tr>
            <th>Team Name</th>
            <th>Total Members</th>
            <th style={{display:"none"}}>Update Team</th>
          </tr>
        </thead>
        <tbody>
          {teams.map((team) => (
            <Team
              key={team.id}
              teamId={team.id}
              TeamName={team.name}
              TotalCount={team.member_count}
              teamColor={team.team_color}
            />
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Teams;
