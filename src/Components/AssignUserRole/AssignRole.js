import React, { useState } from "react";
import Register from "../Register/Register";
import RoleSelectCheckbox from "../Teams/Team/Signup/RoleSelectMenu/RoleSelectCheckbox";
import { useDispatch, useSelector } from "react-redux";
import UserSelectMenu from "./UserSelectMenu/UserSelectMenu";
import * as RoleAction from "../../Redux/Action/AssignRole";
import Navbar from "../Navbar/Navbar";
import Checkbox from "../Teams/Team/Signup/RoleSelectMenu/Checkbox/Checkbox";
import RoleSelectMenu2 from "./RoleSelectCheckbox2/RoleSelectCheckbox2";
import CheckAll from "./CheckAll";
const AssignRole = () => {
  const users = useSelector((state) => state.member.members);
  const roles = useSelector((state) => state.role.userRoles);
  const [selectAllFlag,setSelectAllFlag]=useState(false)
  const dispatch = useDispatch();
  
  const [data, setData] = useState({
    name: "",
    roleId: [],
  });

  const changeUser = (e) => {
    setData({
      ...data,
      name: e.target.value,
    });
  
  };
  const changeRole = (eid,flag) => {
    console.log("changeRole")
    // let arr = [...data.roleId];
    if(flag)
    {
      let arr = [...data.roleId];
      arr.push(eid);
      setData({ ...data, roleId: arr });
    }
    else{
      let arr = [...data.roleId];
    
      for( var i = 0; i < arr.length; i++){ 
                                   
        if ( arr[i] === eid) { 
            arr.splice(i, 1); 
            i--; 
        }
    }
      // arr.filter(value=>value!==eid)
      setData({ ...data, roleId: arr });
    }
 
  };
  const selectAll=(flag)=>{
    if(flag)
    {
      let arr = [];
      roles.map((role)=>{
        arr.push(role.id);
      })
      
      setData({ ...data, roleId: arr });
      setSelectAllFlag(!selectAllFlag)
    }
    else{
    
    
      setSelectAllFlag(!selectAllFlag)
      // arr.filter(value=>value!==eid)
      setData({ ...data, roleId: []});
  }
}
  const submit = (e) => {
    if (data.name !== ""&&data.name !== "0" && data.roleId.length>0) {
      dispatch(RoleAction.assignRole(data));
    } else if (data.name === ""||data.name === "0") {
      alert("Select User");
      e.preventDefault();
    } else {
      alert("Select Role");
      e.preventDefault();
    }
  };
  return (
    <>
      <Navbar />
      <br />
      <UserSelectMenu
        selectTitle="Select User"
        list={users}
        handleChange={changeUser}
      />
     <CheckAll handleChange={selectAll}/>
      <RoleSelectMenu2
        selectTitle="Select Role"
        list={roles}
        handleChange={changeRole}
        flag={selectAllFlag}
      />
      
      <Register linkName={"/myTeam"} submit={submit} linkTitle={"ASSIGN"} />
    </>
  );
};

export default AssignRole;
