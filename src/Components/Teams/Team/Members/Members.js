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
  const [myUserName, setUserName] = useState("");

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
  // findMyTeam()
  return (
    <>
      <Navbar />
      <div className="button">
        <Link to="/add-member">Add Member</Link>
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
          {myTeamId.length > 0
            ? members.map((member) => {
                if (member.member_id !== null) {
                  if (member.user_name !== myUserName) {
                    return member.team.map((value, index) => {
                      // console.log("myteamid", myTeamId);
                      for(var i=0;i<myTeamId.length;i++) {
                        // console.log("hello");
                        if (value ===  myTeamId[i]) {
                      
                          return (
                            <Member
                              key={uuidv4()}
                              memberId={member.member_id}
                              firstName={member.first_name}
                              lastName={member.last_name}
                              email={member.email}
                              teamId={value}
                            />
                          );
                        }
                      }

                      // debugger
                      // console.log(member.user_name, value);
                    });
                  } else if (
                    myUserName === "umair" &&
                    member.user_name !== myUserName
                  ) {
                    return member.team.map((value, index) => {
                      // debugger
                      // console.log(member.user_name, value);
                      return (
                        <Member
                          key={uuidv4()}
                          memberId={member.member_id}
                          firstName={member.first_name}
                          lastName={member.last_name}
                          email={member.email}
                          teamId={value}
                        />
                      );
                    });
                  }
                }
              })
            : null}
        </tbody>
      </table>
    </>
  );
};

export default Members;

// {this.state.orders.map((order, index) => (
//   return (<OrderRow order={order} key={index} />);
// )}
