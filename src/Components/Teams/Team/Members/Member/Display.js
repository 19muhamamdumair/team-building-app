import React from 'react'

const Display = ({memberId, firstName, lastName, email, teamId,teamName}) => {
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

export default Display