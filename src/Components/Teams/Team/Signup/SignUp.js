import React from 'react'
import './SignUp.css'
const SignUp = () => {
  return (
<>
  <div className="container">
    <div className="title">Registration</div>
    <div className="content">
      <form action="#">
        <div className="user-details">
          <div className="input-box">
            <span className="details">First Name</span>
            <input type='text' placeholder='Enter Name' name='fullName' required/>
          </div>
          <div className="input-box">
            <span className="details">Last Name</span>
            <input type="text" placeholder="Enter your username" required/>
          </div>
          <div className="input-box">
            <span className="details">Email</span>
            <input type="text" placeholder="Enter your email" required/>
          </div>
         
        </div>
      
     
      </form>
    </div>
  </div>

  </>
  )
}

export default SignUp