import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import * as MemberAction from '../../../../Redux/Action/createTeam'
import { v4 as uuidv4 } from 'uuid';
import Navbar from '../../../Navbar/Navbar'
const CreateTeam = () => {
    const [data,setData]=useState({teamId:uuidv4(),teamName:"",memberCount:0})
    const dispatch=useDispatch()
    const submit=(e)=>{
        e.preventDefault()
        dispatch(MemberAction.createTeam(data))
    }
    const changeTeamName=(e)=>{
        setData({
            ...data,
            teamName:e.target.value
        })
        console.log(e.target.value)
    }
  return (
    <>
       <Navbar/>
      <div className="container">
        <div className="styling" style={{backgroundColor:'black',color:'white'}}>Create Your Team!</div>
        <div className="content">
          <form action="#" onSubmit={submit}>
            <div className="user-details">
              <div className="input-box">
                <span className="details">Enter Team Name</span>
                <input
                  type="text"
                  placeholder="Enter your Team Name"
                
                  onChange={changeTeamName}
                />
              </div>
            </div>
           
            <div className="styling" style={{backgroundColor:'black',color:'white'}}>
            <input type="submit"/>
              {/* <Link to="/myTeam" style={{ textDecoration: "none" }} onClick={console.log("submit")}>
                Submit
              </Link> */}
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default CreateTeam