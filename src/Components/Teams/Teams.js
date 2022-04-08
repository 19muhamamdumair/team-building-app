import React, { useState } from "react";
import Team from "./Team/Team";
import avatar from '../../Images/img_avatar.png'
const Teams = () => {
    
  return (
    <>
    <div style={{overflowX:"auto"}}>
          <table>
              <tr>
                  <th>Team Name</th>    
                  <th>Total Members</th>
                  <th>Join Now</th>
              </tr>
            
          </table>
      </div>
      <Team id={1} avatar={avatar} TeamName='Engineering' TotalCount={2}/>
      <Team id={2} avatar={avatar} TeamName='Designing' TotalCount={4}/>
      <Team id={3} avatar={avatar} TeamName='Marketing' TotalCount={10}/>
    </>
  );
};

export default Teams;
