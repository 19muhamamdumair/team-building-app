import React, { useState } from "react";
import "./NewMember.css";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Option from "./Option";
import * as MemberAction from '../../../../Redux/Action/createMember'
import Navbar from "../../../Navbar/Navbar";
const SignUp = () => {
  const [data,setData]=useState({firstName:"",lastName:"",email:"",teamName:"",teamId:0,memberCount:0})
 

  const dispatch=useDispatch()
  const teams = useSelector((state) => state.team.teams);
  const changeTeam = (e) => {
    teams.find((team)=>{
      if(team.name===e.target.value)
      {
        console.log(team.id)
        setData({
          ...data,
          teamName: e.target.value,
          teamId:team.id,
          })
      }})
   

  };
  const changeFirstName = (e) => {
    setData({
      ...data,
      firstName: e.target.value,
    });
  };
  const changeLastName = (e) => {
    setData({
      ...data,
     lastName: e.target.value,
    });
    console.log(e.target.value);
  };
  const changeEmail = (e) => {
    setData({
      ...data,
      email: e.target.value,
    });
  };
  const submit=(e)=>{
    teams.find((team)=>{
      if(team.name===data.teamName)
      {
        console.log("team.member_count",team.member_count)
        setData({
          ...data,
          memberCount:team.member_count,
          })
      }})
          
    console.log("memberCount",data.memberCount);
    e.preventDefault()
    dispatch(MemberAction.createMember(data))
    dispatch(MemberAction.incrementCounter(data))
  }
  return (
    <>
      <Navbar/>
      <div className="container">
        <div className="styling" style={{  color:'white'}}>Register Yourself</div>
        <div className="content">
          <form action="#" onSubmit={submit}>
            <div className="user-details">
              <div className="input-box">
                <span className="details">First Name</span>
                <input
                  type="text"
                  placeholder="Enter Name"
                  name="fullName"
           
                  onChange={changeFirstName}
                />
              </div>
              <div className="input-box">
                <span className="details">Last Name</span>
                <input
                  type="text"
                  placeholder="Enter your username"
               
                  onChange={changeLastName}
                />
              </div>
              <div className="input-box">
                <span className="details">Email</span>
                <input
                  type="text"
                  placeholder="Enter your email"
             
                  onChange={changeEmail}
                />
              </div>
            </div>
            <select className="my-menu" onChange={changeTeam}>
              <option value="0">Select Team</option>
              {teams.map((team) => (
                <Option teamName={team.name} key={team.id} id={team.id}/>
      
              ))}
            </select>
            <br />
            <br />
            <div className="styling" style={{backgroundColor:'black',color:'white'}}>
            <input type="submit" value={'REGISTER'} style={{cursor:'pointer',height:'3em',backgroundColor:'white',fontWeight:'bold'}}/>
              {/* <Link to="/myTeam" style={{ textDecoration: "none" }} onClick={console.log("submit")}>
                Submit
              </Link> */}
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default SignUp;
