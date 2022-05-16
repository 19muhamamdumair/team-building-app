import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import GoogleLogin from 'react-google-login';

const CLIENT_ID ="909662374652-d0l1hnl3i56n8p1qi34jvvsj0d2il135.apps.googleusercontent.com"
const Google = () => {
    const dispatch=useDispatch()
  const [data, setData] = useState({
    userName: "",
    email: "",
    id: null,
  });
   const navigate=useNavigate()
 
   
  const navigateMyTeam = () => {
    navigate("/myTeam");
  };
  const [flag,setFlag]=useState(false)

  const  responseGoogleSuccess=(response)=>{
//  console.log(response.email)
 console.log(response)
    if(response.status!=='unknown'){
     
    //   setData({
    //     userName:response.name,
    //     email:response.email,
    //     id:uuidv4()
    //   })
    //   setFlag(!flag)
    //   sessionStorage.setItem("user_name", response.name)
 
    }

    

   }
 
    // useEffect(()=>{
    //   if(data.userName!=='')
    //   {
    //     console.log("hello")
    //     dispatch(UserAction.createUser(data));
    //     setTimeout(navigateMyTeam, 0);
    //   }
    //   setFlag(!flag)
    // },[flag])
   const responseGoogleError = (response) => {
        console.log(response);
      };
  return (
    <GoogleLogin
    clientId={CLIENT_ID}
    buttonText="Sign In with Google"
    onSuccess={responseGoogleSuccess}
    onFailure={responseGoogleError}
    cookie_policy={"single_host_origin"}
  />
  )
}

export default Google