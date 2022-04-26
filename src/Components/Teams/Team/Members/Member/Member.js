import React from "react";
import "./Member.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Display from "./Display";
import {v4 as uuidv4} from 'uuid'
const Member = ({ memberId, firstName, lastName, email, teamId}) => {
  const teams=useSelector(state=>state.team.teams)

  // console.log("Member.js")
  return (
    <>
     {
     
      teams.map((team)=>{
     
       if(team.id===teamId)
       {
        return (<Display memberId={memberId} firstName={firstName} lastName={lastName} email={email} teamId={teamId} teamName={team.name} key={uuidv4()} />)
       }
     })}
     
    </>
  );
};

export default Member;
