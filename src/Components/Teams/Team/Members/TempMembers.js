import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Member from "./Member/Member";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../../../Navbar/Navbar";
import { v4 as uuidv4 } from "uuid";
import SplashScreen from "../../../SplashScreen/SplashScreen";
const Members = () => {
  const [myTeamId, setTeamId] = useState([]);
  const members = useSelector((state) => state.member.members);
  const teamsRed=useSelector(state=>state.team.teams)
  const [groupingByTeam,setGroupingByTeam]=useState([])
  const [myUserName, setUserName] = useState("");
  const [bodyId,setBodyId]=useState("id01")
  const findMyTeam = () => {
    let arr = [...myTeamId];

    members.map((member) => {
      if (member.user_name === sessionStorage.getItem("user_name")) {
        member.team.map((value, index) => {
          arr.push(value);
        });

        setTeamId(arr);
      }
      // setTimeout(console.log(arr),2000)
    });
  };
  const navigate = useNavigate();
  useEffect(() => {
    setUserName(sessionStorage.getItem("user_name"));
    findMyTeam();
    if (myTeamId.length <= 0) {
      findMyTeam();
      // navigate('/loading...')
    }
    const makeMyTames=makeMyTeamHandler();
    setGroupingByTeam(makeMyTames)
    console.log({makeMyTames})
  }, []);

const makeMyTeamHandler = () => {
  let groupByTeams = teamsRed.map((f) => f.id);
  let teamArray = [];
  groupByTeams.map((team) => {
    const findTeam = members.filter((f) => {
      const findEngineersId = f.team.find((f) => f === team);
      if (findEngineersId) {
        return true;
      } else {
        return false;
      }
    });
    if (findTeam && findTeam.length > 0) {
      const findName = teamsRed.find((f) => f.id === team);
      teamArray.push({
        id: team,
        teamMemebers: findTeam,
        teamName: findName.name,
      });
    }
  });
  return teamArray;
};

  // findMyTeam()
  return (
    <>
      <Navbar />
      <div className="button">
        <Link to="/add-member">Update Member</Link>
      </div>
      <table className="members">
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
        {
          groupingByTeam && groupingByTeam.length>0 &&groupingByTeam.map(team=>{
            return (<>
                {
                  team && team.teamMemebers &&   team.teamMemebers.map((mem,index)=>{
                    let styleBorder;

                    if(index===0){
                      styleBorder={borderLeft:'1px solid black',borderRight:'1px solid black',borderTop:'1px solid black'}
                    }
                    else if(index===mem.length-1){
                      styleBorder= {borderLeft:'1px solid black',borderRight:'1px solid black',borderBottom:'1px solid black'}
                    }else {
                      styleBorder= {borderLeft:'1px solid black',borderRight:'1px solid black',}
                    }
                    
                    return ( <tr style={styleBorder}>
                      <td style={{display:'none'}}>{mem.team_id}</td>
                     <td>{mem.member_id}</td>
                     <td>{mem.first_name}</td>
                     <td>{mem.last_name}</td>
                     <td>{mem.email}</td>
                     <td>{team.id}</td>
                     <td>{team.teamName}</td>
                   </tr>)
                  })
                }
            </>)
          })
        }
       </tbody>
      </table>
    </>
  );
};

export default Members;

// {this.state.orders.map((order, index) => (
//   return (<OrderRow order={order} key={index} />);
// )}
// else if (
//   myUserName === "umair" &&
//   member.user_name !== myUserName
// ) {
//   return member.team.map((value, index) => {
//     // debugger
//     // console.log(member.user_name, value);
//     return (
//       <Member
//         key={uuidv4()}
//         memberId={member.member_id}
//         firstName={member.first_name}
//         lastName={member.last_name}
//         email={member.email}
//         teamId={value}
//         bodyId={bodyId}
//       />
//     );
//   });
// }

{/* <tbody id={bodyId}>
{myTeamId.length > 0
  ? members.map((member) => {
      if (member.member_id !== null) {
        if (member.user_name !== myUserName) {
          return member.team.map((value, index) => {
            // console.log("myteamid", myTeamId);
            for (var i = 0; i < myTeamId.length; i++) {
              // console.log("hello");
              if (value === myTeamId[i]) {
                return (
                  <Member
                    key={uuidv4()}
                    memberId={member.member_id}
                    firstName={member.first_name}
                    lastName={member.last_name}
                    email={member.email}
                    teamId={value}
                    bodyId={bodyId}
                  />
                );
              }
            }

            // debugger
            // console.log(member.user_name, value);
          });
        }
      }
    })
  : null}
</tbody> */}

















// {this.state.orders.map((order, index) => (
//   return (<OrderRow order={order} key={index} />);
// )}
// else if (
//   myUserName === "umair" &&
//   member.user_name !== myUserName
// ) {
//   return member.team.map((value, index) => {
//     // debugger
//     // console.log(member.user_name, value);
//     return (
//       <Member
//         key={uuidv4()}
//         memberId={member.member_id}
//         firstName={member.first_name}
//         lastName={member.last_name}
//         email={member.email}
//         teamId={value}
//         bodyId={bodyId}
//       />
//     );
//   });
// }

{/* <tbody id={bodyId}>
{myTeamId.length > 0
  ? members.map((member) => {
      if (member.member_id !== null) {
        if (member.user_name !== myUserName) {
          return member.team.map((value, index) => {
            // console.log("myteamid", myTeamId);
            for (var i = 0; i < myTeamId.length; i++) {
              // console.log("hello");
              if (value === myTeamId[i]) {
                return (
                  <Member
                    key={uuidv4()}
                    memberId={member.member_id}
                    firstName={member.first_name}
                    lastName={member.last_name}
                    email={member.email}
                    teamId={value}
                    bodyId={bodyId}
                  />
                );
              }
            }

            // debugger
            // console.log(member.user_name, value);
          });
        }
      }
    })
  : null}
</tbody> */}

