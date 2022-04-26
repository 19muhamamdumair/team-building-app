import {ErrorMessage, Formik, useField } from 'formik'
import React, { useEffect } from 'react'
import './Login.css'
import { useFormik } from 'formik'
const TextField = ({label,name,type,functionName}) => {
 
  // const props={
  //   name,type
  // }
  //   const [field,meta]=useField(props)

  
  return (
    <div className='mb-2'>
        <label >{label}</label>
        <input
        name={name}
        type={type}
        onChange={functionName}
      
        />
    </div>
  )
}

export default TextField