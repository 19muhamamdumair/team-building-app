import React, { useEffect } from "react";
import "./InputForm.css";
import { Formik,Form } from "formik";

import {ErrorMessage, useField } from 'formik'
const InputForm = ({ detailName,name, typeName, placeholder,formik ,value}) => {

  return (
    <div className="InputForm">
    <div className="input-box" style={{marginBottom:".5em"}}>
      <label >{detailName}</label>
      <input
       value={value}
        type={typeName}
        placeholder={placeholder}
        name={name}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        // {...register("name", { required: "Name is required" })}
      />
      </div>
        
    </div>
  );
};

export default InputForm;
