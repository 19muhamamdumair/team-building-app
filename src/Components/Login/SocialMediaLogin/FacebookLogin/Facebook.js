import { render } from '@testing-library/react';
import React, { useEffect, useState } from 'react'
import FacebookLoginBtn  from 'react-facebook-login';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from "uuid";
import * as UserAction from "../../../../Redux/Action/createUser";
const Facebook=()=>{
 const dispatch=useDispatch()
  const [data, setData] = useState({
    userName: "",
    email: "",
    id: null,
  });
   const navigate=useNavigate()
  const componentClicked=()=>{
console.log("fb btn clicked")
   }
   
  const navigateMyTeam = () => {
    navigate("/myTeam");
  };
  const [flag,setFlag]=useState(false)

  const  responseFacebook=(response)=>{
 console.log(response.email)
    if(response.status!=='unknown'){
     
      setData({
        userName:response.name,
        email:response.email,
        id:uuidv4()
      })
      setFlag(!flag)
      sessionStorage.setItem("user_name", response.name)
 
    }

    

   }
 
    useEffect(()=>{
      if(data.userName!=='')
      {
        console.log("hello")
        dispatch(UserAction.createUser(data));
        setTimeout(navigateMyTeam, 0);
      }
      setFlag(!flag)
    },[flag])
    
    return (
       <FacebookLoginBtn
      appId="712313423442785"
      autoLoad={false}
      fields="name,picture,email"
      onClick={componentClicked}
      callback={responseFacebook} />
   
    )
  
}
export default Facebook