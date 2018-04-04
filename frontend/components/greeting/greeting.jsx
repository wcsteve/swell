import React from 'react';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

const sessionLinks = () => (
  <nav className="SignInNavBar">
    <NavLink className="SessionButton" to='/signup'>Sign Up</NavLink>
    <NavLink className="SessionButton" to='/signin'>Sign In</NavLink>
    <NavLink className="SessionButton" to='/signin'>Demo</NavLink>
  </nav>
)


const personalGreeting = (currentUser, logout) => (
  <div>
    <h2>{currentUser.username}</h2>
    <button type="button" onClick={logout}>Log Out</button>
  </div>
)

const Greeting = ({ currentUser, logout}) => (
  currentUser ? personalGreeting(currentUser, logout) : sessionLinks()
);

export default Greeting;
