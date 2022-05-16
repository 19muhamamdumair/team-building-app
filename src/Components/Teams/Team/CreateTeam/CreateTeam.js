import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import * as MemberAction from "../../../../Redux/Action/createTeam";
import { v4 as uuidv4 } from "uuid";
import Navbar from "../../../Navbar/Navbar";
import Register from "../../../Register/Register";
import * as Yup from "yup";
import TextField from "../../../Login/TextField";
import InputForm from "../../../InputForm/InputForm";
import { useFormik } from "formik";
import SelectMenu from "../Signup/TeamSelectMenu/TeamSelectMenu";
import ColorPicker from "../../../ColorPicker/ColorPicker";
const CreateTeam = () => {
  const [data, setData] = useState({
    teamId: null,
    teamName: "",
    memberCount: 0,
    teamColor:''
  });

  const teamColors = useSelector((state) => state.team.colors); 
  const dispatch = useDispatch();
  const navigate=useNavigate()
  const formik = useFormik({
    initialValues: {
      teamName: "",
    },
    validationSchema: Yup.object({
      teamName: Yup.string()
        .max(15, "Must be less than 15 charcters")
        .required("Required"),
    }),

    onSubmit: () => {
      setData({
        ...data,
        teamId: uuidv4(),
        teamName: formik.values.teamName,
        memberCount: 0,
      });
      console.log(data)
    },
   
  });

  useEffect(() => {
    if (data.teamName !== "") {
      dispatch(MemberAction.createTeam(data));
      navigate("/Teams");
    }
  }, [data]);

 const changeColor=(e)=>{
    setData({
      ...data,
      teamColor:e.target.value
    })
    console.log(e.target.value)
 }
  return (
    <>
      <div>
        <Navbar />
        <div className="container">
          <div
            className="styling"
            style={{ backgroundColor: "#333", color: "white" }}
          >
            Create Your Team!
          </div>
          <div className="content">
            <form action="#">
              <div className="user-details">
                <div className="input-box">
                  <InputForm
                    formik={formik}
                    detailName="Team Name"
                    value={formik.values.teamName}
                    name="teamName"
                    typeName="text"
                    placeholder="Enter Team Name"
                  />
                  {formik.touched.teamName && formik.errors.teamName ? (
                    <p className="error">{formik.errors.teamName}</p>
                  ) : null}
                </div>
              </div>
              <ColorPicker  selectTitle="Select Team Color"  handleChange={changeColor}/>
                    {/* <SelectMenu selectTitle="Select Team Color"
              list={teamColors}
              handleChange={changeColor}
              flag="teamColor"
              /> */}
              <Register
                linkName={"/Teams"}
                submit={formik.handleSubmit}
                linkTitle={"CREATE TEAM"}
              />
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreateTeam;
