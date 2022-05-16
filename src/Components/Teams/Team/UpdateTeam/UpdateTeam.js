import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import ColorPicker from '../../../ColorPicker/ColorPicker';
import InputForm2 from '../../../InputForm/InputForm2';
import Navbar from '../../../Navbar/Navbar';
import Register from '../../../Register/Register';
import SelectMenu from '../Signup/TeamSelectMenu/TeamSelectMenu';
import {v4 as uuidv4} from 'uuid'
import * as MemberAction from "../../../../Redux/Action/createTeam";
import { useLocation } from 'react-router-dom';
const UpdateTeam = ({prevTeamName}) => {
    const [prevTeam,setPrevTeam]=useState({
      prevTeamId:null,
      prevTeamName:"",
      prevTeamColor:""
    })
    const [data,setData]=useState({
        newTeamId:null,
        newTeamName:"",
        newColor:"",
        prevId:null
    })
    const teams = useSelector((state) => state.team.teams);
    const location = useLocation()
useEffect(()=>{
console.log(teams)
  teams.find((team) => {
    if (team.id ===location.state?.teamId) {
   console.log("ok")
      setPrevTeam({
        prevTeamId:location.state?.teamId,
        prevTeamName:team.name,
        prevTeamColor:team.team_color
      });
      // setTeamFlag(true)
    }
  });


//  setTimeout (()=>console.log(prevTeamIdd),2000)
},[location])
    const dispatch=useDispatch()
   
    // const changePrevTeam = (e) => {
        // teams.find((team) => {
        //   if (team.name === e.target.value) {
         
        //     setPrevTeam({
        //       prevTeamId:team.id,
        //       prevTeamName:team.name,
        //       prevTeamColor:team.team_color
        //     });
        //     // setTeamFlag(true)
        //   }
        // });
        // console.log(prevTeam.prevTeamColor)
    // }
    const changeNewTeamName=(e)=>{
      setData({
        ...data,
        teamId:uuidv4(),
        newTeamName:e.target.value,
        newColor:prevTeam.prevTeamColor,
        prevId:prevTeam.prevTeamId
      })
      setPrevTeam({
        ...prevTeam,
        prevTeamName:e.target.value
      })
    }
    const submit=()=>{
        dispatch(MemberAction.updateTeam(data))
    }
    const changeColor=(e)=>{
      setData({
        ...data,
        newColor:e.target.value
      })
      setPrevTeam({
        ...prevTeam,
        prevTeamColor:e.target.value
      })
      console.log(e.target.value)
   }
    // const changeColor=(e)=>{
      
    //   setData({
    //     ...data,
    //     newColor:e.target.value
    //   })
    // }
  return (
    <div>
        <Navbar />
      <div className="container">
       
        <div className="content">
          <form>
            <div className="user-details">
            {/* <SelectMenu
              selectTitle="Select Team to Update"
              list={teams}
              handleChange={changePrevTeam}
              flag="teamName"
            /> */}

              <InputForm2
            //   formik={formik}
                name="teamName"
                detailName="New Team Name"
                typeName="text"
                value={prevTeam.prevTeamName}
                placeholder={prevTeam.prevTeamName}
                
                functionName={changeNewTeamName}
              />
              <ColorPicker  selectTitle="Select New Team Color" colorValue={prevTeam.prevTeamColor} handleChange={changeColor}/>
            
            </div>
           
            {/* <RoleSelectCheckbox
              selectTitle="Select Role"
              list={roles}
              handleChange={changeRole}
            /> */}

            <Register
              linkName={"/Teams"}
              submit={submit}
              linkTitle={"UPDATE"}
            />
          </form>
        </div>
      </div>
      
    </div>
  )
}

export default UpdateTeam