import { NavLink } from 'react-router-dom';
import React from 'react';

const NavBar = () => (
  <ul className="site-nav-bar">

    <li className="site-nav-button">
      <NavLink to="/users">Dashboard</NavLink>
    </li>

    <li className="site-nav-button">
      <NavLink to="/workouts">Training</NavLink>
    </li>

    <li className="site-nav-button">
      <NavLink to="/routes">My Routes</NavLink>
    </li>

  </ul>
)

export default NavBar;
