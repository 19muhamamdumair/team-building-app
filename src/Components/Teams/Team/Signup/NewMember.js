import React, { useState } from "react";
import "./NewMember.css";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Option from "./Option";
import * as MemberAction from "../../../../Redux/Action/createMember";
import Navbar from "../../../Navbar/Navbar";
import Register from "../../../Register/Register";
const SignUp = () => {
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    teamName: "",
    teamId: 0,
    memberCount: 0,
  });

  const dispatch = useDispatch();
  const teams = useSelector((state) => state.team.teams);
  const changeTeam = (e) => {
    teams.find((team) => {
      if (team.name === e.target.value) {
        setData({
          ...data,
          teamName: e.target.value,
          teamId: team.id,
        });
      }
    });
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
  };
  const changeEmail = (e) => {
    setData({
      ...data,
      email: e.target.value,
    });
  };
  const submit = (e) => {
    if (
      data.firstName === "" ||
      data.lastName === "" ||
      data.email === "" 
    ) {
      alert("Fill all input fields");
      e.preventDefault();
    
     }
    else if(  data.teamName === ""){
      alert("Select Your Team");
      e.preventDefault();
    }
     else {
      teams.find((team) => {
        if (team.name === data.teamName) {
          setData({
            ...data,
            memberCount: team.member_count,
          });
        }
      });

      // e.preventDefault()
      dispatch(MemberAction.createMember(data));
      dispatch(MemberAction.incrementCounter(data));
    
    }
  };
  return (
    <>
      <Navbar />
      <div className="container">
        <div className="styling" style={{ color: "white" }}>
          Register Yourself
        </div>
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
                  required
                />
              </div>
              <div className="input-box">
                <span className="details">Last Name</span>
                <input
                  type="text"
                  placeholder="Enter your username"
                  onChange={changeLastName}
                  required
                />
              </div>
              <div className="input-box">
                <span className="details">Email</span>
                <input
                  type="text"
                  placeholder="Enter your email"
                  onChange={changeEmail}
                  required
                />
              </div>
            </div>
            <div className="input-box">
              <span className="details">Select Team</span>
              <select className="my-menu" onChange={changeTeam}>
                <option
                  value="0"
                  style={{ color: "white", backgroundColor: "#333" }}
                >
                  Select Team
                </option>
                {teams.map((team) => (
                  <Option teamName={team.name} key={team.id} id={team.id} />
                ))}
              </select>
            </div>
                  
            <Register
              linkName={"/myTeam"}
              submit={submit}
              linkTitle={"REGISTER"}
            />
          </form>
        </div>
      </div>
    </>
  );
};

export default SignUp;
