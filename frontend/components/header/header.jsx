import React from 'react';
import GreetingContainer from '../greeting/greeting_container';
import { NavLink, Link } from 'react-router-dom';


const Header = () => (
  <header className="Header">
    <Link className="Logo" to={`/users`}>Swell
    </Link>

    <GreetingContainer />
  </header>
)

export default Header;


// <h1 className="Logo">Swell</h1>
