import { NavLink } from 'react-router-dom';
import React from 'react';

const NavBar = () => (
  <ul className="site-nav-bar">

    <li className="SessionButton">
      <NavLink to="/users">Dashboard</NavLink>
    </li>

    <li className="SessionButton">
      <NavLink to="/workouts">Training</NavLink>
    </li>

    <li className="SessionButton">
      <NavLink to="/routes">My Routes</NavLink>
    </li>

  </ul>
)

export default NavBar;
