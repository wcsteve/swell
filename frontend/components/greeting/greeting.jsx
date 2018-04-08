import React from 'react';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import NavBar from './site_nav_bar'

const sessionLinks = () => (
  <nav className="SignInNavBar">
    <NavLink className="SessionButton" to='/signup'>Sign Up</NavLink>
    <NavLink className="SessionButton" to='/signin'>Sign In</NavLink>
    <NavLink className="SessionButton" to='/signin'>Demo</NavLink>
  </nav>
)

const personalGreeting = (currentUser, logout) => (
  <div className="main-nav-bar">
    <NavBar/>
    <nav className="session-nav-bar">
      <button
        className="sign-out-button"
        type="button"
        onClick={logout}>Log Out
      </button>
    </nav>
  </div>
)

const Greeting = ({ currentUser, logout}) => (
  currentUser ? personalGreeting(currentUser, logout) : sessionLinks()
);

export default Greeting;
