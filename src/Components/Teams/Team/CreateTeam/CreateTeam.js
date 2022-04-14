import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import * as MemberAction from '../../../../Redux/Action/createTeam'
import { v4 as uuidv4 } from 'uuid';
import Navbar from '../../../Navbar/Navbar'
import Register from '../../../Register/Register'
const CreateTeam = () => {
    const [data,setData]=useState({teamId:uuidv4(),teamName:"",memberCount:0})
    const dispatch=useDispatch()
    const submit=(e)=>{
      if(data.teamName!=="")
      {
        dispatch(MemberAction.createTeam(data))
      }
      else{
        e.preventDefault()
        alert("Fill all input fields")
      }
    
    }
    const changeTeamName=(e)=>{
        setData({
            ...data,
            teamName:e.target.value
        })
    }
  return (
    <>
       <Navbar/>
      <div className="container">
        <div className="styling" style={{backgroundColor: "#333",color:'white'}}>Create Your Team!</div>
        <div className="content">
          <form action="#">
            <div className="user-details">
              <div className="input-box">
                <span className="details" >Enter Team Name</span>
                <input
                  type="text"
                  placeholder="Enter your Team Name"
                required
                  onChange={changeTeamName}
                />
              </div>
            </div>
           
           
            <Register linkName={'/Teams'} submit={submit} linkTitle={'CREATE TEAM'}/>
                
        
          
          </form>
        </div>
      </div>
    </>
  )
}

export default CreateTeam