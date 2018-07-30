import { NavLink } from 'react-router-dom';
import React from 'react';

const NavBar = () => (
  <div className={"site-nav-bar"}>
    <NavLink
      className={"SessionButton"}
      activeClassName="selected-nav-bar"
      to="/users">Dashboard
    </NavLink>
    <NavLink
      className={"SessionButton"}
      activeClassName="selected-nav-bar"
      to="/training">Training
    </NavLink>
    <NavLink
      className={"SessionButton"}
      activeClassName="selected-nav-bar"
      to="/routes">My Routes
    </NavLink>
  </div>
)

export default NavBar;


// 
// <ul className="site-nav-bar">
//
//   <li className="SessionButton">
//     <NavLink className={'session-lin'} activeClassName="selected-nav-bar" to="/users">Dashboard</NavLink>
//   </li>
//
//   <li className="SessionButton">
//     <NavLink activeClassName="selected-nav-bar" to="/training">Training</NavLink>
//   </li>
//
//   <li className="SessionButton">
//     <NavLink activeClassName="selected-nav-bar" to="/routes">My Routes</NavLink>
//   </li>
//
// </ul>
