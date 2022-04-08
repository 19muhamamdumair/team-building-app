import React from "react";
import "./Team.css";
import { Link } from "react-router-dom";
const Team = ({ avatar, TeamName, TotalCount }) => {
  return (
    <div style={{ overflowX: "auto" }}>
      <table>
        <tr className="tablerow">
          <td>{TeamName}</td>
          <td>{TotalCount}</td>
          <td>
         
             <Link to="/myTeam">Join Now!</Link>
         
          </td>
        </tr>
      </table>
    </div>
    //     <>
    //     <div className="card">
    //       <img src={avatar} alt="Avatar" style={{width:110,height:100}} />
    //       <div className="container">
    //         <h4>
    //           <b>Team:{TeamName}</b>
    //         </h4>
    //         <h4>

    //             <b>Total Members:{TotalCount}</b>
    //         </h4>
    //         <nav className='button'>
    //         <Link to="/myTeam">Join Now!</Link>
    //         </nav>
    //       </div>
    //     </div>
    //   </>
  );
};

export default Team;
