import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <nav class="navbar">
      

    <ul class="main_nav">
      <li>
      <Link to="/Teams">View Teams</Link>
      </li>
      <li>
      <Link to="/create-team">Create Team</Link>
      </li>
      <li>
      <Link to="/myTeam">View Members</Link>
      </li>
      <li>
      <Link to="/add-member">Add Member</Link>
      </li>
      <li>
      <Link to="/todo">Todo List</Link>
      </li>
    </ul>
  </nav>
  )
}

export default Navbar