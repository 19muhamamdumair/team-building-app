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
      <div className="button">
        <Link to="/create-team">Add Team</Link>
      </div>
      <table className="teams">
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
