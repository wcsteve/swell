import { NavLink } from 'react-router-dom';
import React from 'react';

const NavBar = () => (
  <nav className="site-nav-bar">
    <NavLink className="main-nav-button" to="/users">Dashboard</NavLink>
    <NavLink className="main-nav-button" to="/workouts">Training</NavLink>
    <NavLink className="main-nav-button" to="/routes">My Routes</NavLink>
  </nav>
)

export default NavBar;
