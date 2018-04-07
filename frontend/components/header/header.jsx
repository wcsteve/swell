import React from 'react';
import GreetingContainer from '../greeting/greeting_container';
import { NavLink } from 'react-router-dom';


const Header = () => (
  <header className="Header">
    <h1 className="Logo">Swell</h1>
    <GreetingContainer />
    <NavLink to='/routes'>Routes</NavLink>
  </header>
)

export default Header;
