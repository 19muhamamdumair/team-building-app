import React from "react";
import { useSelector } from "react-redux";
import Member from "./Member/Member";
import { Link } from "react-router-dom";
import Navbar from "../../../Navbar/Navbar";
const Members = () => {
  const members = useSelector((state) => state.member.members);
  return (
    <>
    <Navbar/>
     
      <table>
        <thead>
          <tr>
            <th>Member Id</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Team Id</th>
            <th>Team Name</th>
          </tr>
        </thead>
        <tbody>
        {members.map(member => 
         
         <Member key={member.id} memberId={member.id} 
         firstName={member.first_name}
         lastName={member.last_name}
         email={member.email}
         teamId={member.team.id}
         teamName={member.team.name} />
        )}
         
        </tbody>
      </table>
    </>
  );
};

export default Members;





// {this.state.orders.map((order, index) => (
//   return (<OrderRow order={order} key={index} />);
// )}