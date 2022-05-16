import React, { useEffect, useState } from "react";
import InputForm from "../InputForm/InputForm";
import Register from "../Register/Register";
import { v4 as uuidv4 } from "uuid";
import { useDispatch, useSelector } from "react-redux";
import * as RoleAction from "../../Redux/Action/createUserRole";

import Navbar from "../Navbar/Navbar";
import Header from "../Todo/Header/Header";

import RoleList from './RoleList/RoleList'
import { Navigate, useNavigate } from "react-router-dom";
const UserRole = () => {
  const [title, setTitle] = useState("");
  const [roleId, setRoleId] = useState({ id: null });
  const [isUpdated, setIsUpdated] = useState(true);
  const [data, setData] = useState({
    roleId: uuidv4(),
    userRole: "",
    memberCount: 0,
  });
  const [deleteRoleId,setDeleteID]=useState(null)
  const roles = useSelector((state) => state.role.userRoles);
const navigate=useNavigate()
  const dispatch = useDispatch();
  const handleChange = (e) => {
    setData({
      ...data,
      userRole: e.target.value,
    });
    setTitle(e.target.value);
  };
  const updateRole = () => {
    if (roleId.id !== null) {
     
      const newRole = { id: roleId.id, userRole:title, memberCount:0 };
      dispatch(RoleAction.updateUserRole(newRole));
      setIsUpdated(!isUpdated);
    } else {
      alert("Select Role to update");
    }
    setTitle("")
  };
  const updateId = (id, title) => {
    // debugger;
   
    if(deleteRoleId===null)
    {
       
        setRoleId({
            id: id,
          });
          setTitle(title);
    }
 
  };

  const addRole = (e) => {
    if (data.userRole === "") {
      alert("Fill all input fields");
      e.preventDefault();
    } else {
    
      const newTodo = { roleId: uuidv4(), userRole:title, memberCount:0};
      dispatch(RoleAction.createUserRole(newTodo));
    }
    setTitle("")
  };
  async function deleteRole(id) {
    // debugger
    let promise = new Promise((resolve, reject) => {
      setDeleteID(id)
      setTimeout(() => resolve(setTitle("")), 1000)
     
    });
    let res = await promise; // wait until the promise resolves (*)
    // navigate('/loading...')
    dispatch(RoleAction.deleteUserRole(id))
   
  
  }
  // const deleteRole=(id)=>{
  //     setDeleteID(id)

  //   dispatch(RoleAction.deleteUserRole(id))

  // }
  return (
    <>
      <Navbar />
      <div className="content">
        <Header
          addTodo={addRole}
          updateTodo={updateRole}
          handleChange={handleChange}
          title={title}
          headerName="Create User Role"
        />
        <RoleList updateId={updateId} roles={roles} deleteRole={deleteRole}/>
      </div>
    </>
  );
};

export default UserRole;

{
  /* <div className="container">
      <div className="styling" style={{ color: "white" }}>
        User Roles
      </div>
      <div className="content">
        <form>
          <InputForm
            detailName="User Role"
            typeName="text"
            placeholder="Enter User Role"
            functionName={changeUserRole}
          />
            <Register
              linkName={"/user-role"}
              submit={submit}
              linkTitle={"ADD"}
            />
        </form>
      </div>
    </div> */
}
