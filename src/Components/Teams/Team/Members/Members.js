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
  const teamsRed = useSelector((state) => state.team.teams);
  const [groupingByTeam, setGroupingByTeam] = useState([]);
  const [myUserName, setUserName] = useState("");
  const [bodyId, setBodyId] = useState("id01");
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
  }, []);
  useEffect(() => {
    const makeMyTames = makeMyTeamHandler();
    // console.log({ myTeamId });
    setGroupingByTeam(makeMyTames);
    // console.log({ makeMyTames });
  }, [myTeamId]);

  const makeMyTeamHandler = () => {
    let groupByTeams = teamsRed.map((f) => f.id);
    let teamArray = [];
    groupByTeams.map((team) => {
      const findTeam = members.filter((f) => {
        let showThisRecordOrNot =
          myTeamId && myTeamId.length > 0 && myTeamId.find((f) => f === team);
        const findEngineersId = f.team.find((f) => f === team);
        if (findEngineersId && showThisRecordOrNot) {
          return true;
        } else {
          return false;
        }
      });
      if (findTeam && findTeam.length > 0) {
        const findName = teamsRed.find((f) => f.id === team);
     
        teamArray.push({
          current: team,
          teamMemebers: findTeam,
          teamName: findName.name,
          teamColor:findName.team_color
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
          {groupingByTeam &&
            groupingByTeam.length > 0 &&
            groupingByTeam.map((team, index) => {
              let styleBorder;
              console.log(team.teamColor)
              return (
                <>
                  {team &&
                    team.teamMemebers &&
                    team.teamMemebers.map((mem, index) => {
                      // let styleBorder;
                    
                      if (index === 0) {
                       
                        styleBorder = {
                          borderLeft: `1px solid ${team.teamColor} ` ,                     
                          borderRight: `1px solid ${team.teamColor} `,
                          borderTop: `1px solid ${team.teamColor} `,
                        };
                      } else if (index === team.teamMemebers.length - 1) {
                      
                        styleBorder = {
                          borderLeft: `1px solid ${team.teamColor} `,
                          borderRight: `1px solid ${team.teamColor} `,
                          borderBottom: `1px solid ${team.teamColor} `,
                          // borderTop:'1px solid black'
                        };
                      } else {
                      
                        styleBorder = {
                          borderLeft: `1px solid ${team.teamColor} `,
                          borderRight: `1px solid ${team.teamColor} `,
                        };
                      }
                      if (mem.user_name !== myUserName) {
                        return (
                          <tr style={styleBorder}>
                            <td style={{ display: "none" }}>{mem.team_id}</td>
                            <td>{mem.member_id}</td>
                            <td>{mem.first_name}</td>
                            <td>{mem.last_name}</td>
                            <td>{mem.email}</td>
                            <td>{team.current}</td>
                            <td>{team.teamName}</td>
                          </tr>
                        );
                      } else {
                        if (index === team.teamMemebers.length - 1) {
                          styleBorder = {
                            borderLeft: `1px solid ${team.teamColor} `,
                            borderRight: `1px solid ${team.teamColor} `,
                            borderBottom: `1px solid ${team.teamColor} `,
                            borderTop: `1px solid ${team.teamColor} `,
                          };
                          return (
                            <tr style={styleBorder}>
                              <td style={{ display: "none" }}>{mem.team_id}</td>
                              <td style={{ display: "none" }}>
                                {mem.member_id}
                              </td>
                              <td style={{ display: "none" }}>
                                {mem.first_name}
                              </td>
                              <td style={{ display: "none" }}>
                                {mem.last_name}
                              </td>
                              <td style={{ display: "none" }}>{mem.email}</td>
                              <td style={{ display: "none" }}>{team.id}</td>
                              <td style={{ display: "none" }}>
                                {team.teamName}
                              </td>
                            </tr>
                          );
                        } else {
                          return;
                        }
                      }
                    })}
                </>
              );
            })}
        </tbody>
      </table>
    </>
  );
};

export default Members;
