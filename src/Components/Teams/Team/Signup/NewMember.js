import React, { useState } from "react";
import "./NewMember.css";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Option from "./Option";
import * as MemberAction from "../../../../Redux/Action/createMember";
import * as RoleAction from "../../../../Redux/Action/createUserRole";
import Navbar from "../../../Navbar/Navbar";
import Register from "../../../Register/Register";
import InputForm from "../../../InputForm/InputForm";
import TeamSelectMenu from "./TeamSelectMenu/TeamSelectMenu";
import RoleSelectCheckbox from "./RoleSelectMenu/RoleSelectCheckbox";
import * as Yup from 'yup'
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import InputForm2 from "../../../InputForm/InputForm2";
const SignUp = () => {
  const navigate = useNavigate();
  let [temp, setTemp] = useState(false);
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    teamName: "",
    teamId: null,
    // roleId: [],
    memberCount: 0,
  });
  const [teamFlag,setTeamFlag]=useState(false)
  const dispatch = useDispatch();
  const teams = useSelector((state) => state.team.teams);
  const roles = useSelector((state) => state.role.userRoles);
  const users = useSelector((state) => state.member.members);
  const changeTeam = (e) => {
    teams.find((team) => {
      if (team.name === e.target.value) {
     
        setData({
          ...data,
          teamId: team.id,
        });
        setTeamFlag(true)
      }
    });
    // let arr = [...data.roleId];
    
    // teams.find((team) => {
    //   if (team.name === e.target.value) {
    //     arr.pop()
    //     arr.push(team.id);
    //     setData({
    //       ...data,
    //       teamId: arr,
    //     });
    //     setTeamFlag(true)
    //   }
    // });
  };
  // const changeRole = (eid) => {
  //   let arr = [...data.roleId];
  //   arr.push(eid);

  //   setData({ ...data, roleId: arr });
  // };
  const changeFirstName = (e) => {
    setData({
      ...data,
      firstName: e.target.value,
    });
  };
  const changeLastName = (e) => {
    setData({
      ...data,
      lastName: e.target.value,
    });
  };
  const changeEmail = (e) => {
    setData({
      ...data,
      email: e.target.value,
    });
  };
  const submit = (e) => {

    let flag = false;
    if (data.firstName === "" || data.lastName === "" || teamFlag===false) {
      alert("Fill all input fields");
      e.preventDefault();
    } else if (teamFlag === flag) {
      alert("Select Your Team");
      e.preventDefault();
    } else {
      teams.find((team) => {
        if (team.name === data.teamName) {
          setData({
            ...data,
            memberCount: team.member_count,
          });
        }
      });
      users.map((user) => {
        if (user.email === data.email) {
          flag = true;
        }
      });
      if (flag === true) {
        dispatch(MemberAction.createMember(data));
        dispatch(MemberAction.assignTeam(data))
        setTimeout(()=> dispatch(MemberAction.incrementCounter(data)),2000)
        dispatch(RoleAction.incrementRoleMembers(data));
      } else {
        alert("Enter Correct Email")
        e.preventDefault();
      }
    }
  };
  // const formik = useFormik({
  //   initialValues: {
  //     firstName: "",
  //     lastName: "",
  //     email: "",
  //     teamId: null,
  //     roleId: [],
  //     memberCount: 0,
  //   },
  //   validationSchema: Yup.object({
  //     firstName: Yup.string()
  //       .max(15, "Must be less than 15 charcters")
  //       .required("Required"),
  //     lastName: Yup.string()
  //       .max(15, "Must be less than 15 charcters")
  //       .required("Required"),
  //     email: Yup.string().email("Email is invalid").required("Required"),
  //     teamName: Yup.string().required,
  //   }),

  //   onSubmit: () => {

  //     setData({
  //        firstName: formik.values.firstName,
  //     lastName: formik.values.lastName,
  //     email:  formik.values.email,
  //     teamName: formik.values.teamName,
  //     teamId: null,
  //     roleId: [],
  //     memberCount: 0,
     
  //     });
  
  //     teams.find((team) => {
  //       if (team.name === formik.values.teamName) {
  //         setData({
  //           ...data,
  //           teamId: team.id,
  //         });
  //       }
  //     });
      
  //   },
  //   navigate('')
  // });
//   useEffect(() => {
//     let flag = false;
//     if (
//       data.firstName != "" ||
//       data.email != "" ||
//       data.lastName != "" ||
//       data.teamName != ""||
//       data.teamId!==""
//     ) {
//       teams.find((team) => {
//         if (team.name === data.teamName) {
//           setData({
//             ...data,
//             memberCount: team.member_count,
//           });
//         }
//       });
//       users.map((user) => {
//         if (user.email === data.email) {
//           flag = true;
//         }
//       });
//       if (flag === true) {
//         dispatch(MemberAction.createMember(data));
//         dispatch(MemberAction.incrementCounter(data));
//         dispatch(RoleAction.incrementRoleMembers(data));
//       } else {
//         alert("Enter correct Email");
//         e.preventDefault();
//       }
//     }
//   }, [data]);

  
  return (
    <>
      <Navbar />
      <div className="container">
       
        <div className="content">
          <form>
            <div className="user-details">
      
              <InputForm2
            //   formik={formik}
                name="firstName"
                detailName="First Name"
                typeName="text"
                placeholder="Enter First Name"
                functionName={changeFirstName}
              />
              <InputForm2
            //   formik={formik}
                name="lastName"
                detailName="Last Name"
                typeName="text"
                placeholder="Enter Last Name"
                functionName={changeLastName}
              />
              <InputForm2
            //   formik={formik}
                name="email"
                detailName="Email"
                typeName="text"
                placeholder="Enter your Email"
                functionName={changeEmail}
              />
            </div>
            <TeamSelectMenu
              selectTitle="Select Team"
              list={teams}
              handleChange={changeTeam}
              flag="teamName"
            />
            {/* <RoleSelectCheckbox
              selectTitle="Select Role"
              list={roles}
              handleChange={changeRole}
            /> */}

            <Register
              linkName={"/myTeam"}
              submit={submit}
              linkTitle={"UPDATE"}
            />
          </form>
        </div>
      </div>
    </>
  );
};

export default SignUp;
