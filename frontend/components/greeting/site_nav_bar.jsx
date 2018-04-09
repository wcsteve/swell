import { NavLink } from 'react-router-dom';
import React from 'react';

const NavBar = () => (
  <ul className="site-nav-bar">

    <li className="site-nav-button">
      <NavLink exact={true} activeClassName="button-contents" to="/users">Dashboard</NavLink>
    </li>

    <li className="site-nav-button">
      <NavLink exact={true} activeClassName="button-contents" to="/workouts">Training</NavLink>
    </li>

    <li className="site-nav-button">
      <NavLink exact={true} activeClassName="button-contents" to="/routes">My Routes</NavLink>
    </li>

  </ul>
)

export default NavBar;
