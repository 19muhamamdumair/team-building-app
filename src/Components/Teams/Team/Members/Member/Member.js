import React from 'react'
import './Member.css'
const Member = ({memberId,firstName,lastName,email,teamId,teamName}) => {
  return (
         <tr>
          <td>{memberId}</td>
          <td>{firstName}</td>
          <td>{lastName}</td>
          <td>{email}</td>
          <td>{teamId}</td>
          <td>{teamName}</td>
        </tr>
  )
}

export default Member