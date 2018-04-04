import React from 'react';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

const sessionLinks = () => (
  <nav>
    <NavLink to='/signup'>Sign Up</NavLink>
    <NavLink to='/login'>Login</NavLink>
    <NavLink to='/login'>Demo</NavLink>
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
