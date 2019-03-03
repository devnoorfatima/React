import React from 'react';
import {NavLink} from 'react-router-dom';
const Header = () => (
    <div>
      <h1>Portfolio</h1>
      <ul> 
        <li><NavLink activeClassName="is-active" to='/' exact={true}>Home</NavLink></li>
        <li><NavLink to='/portfolio' activeClassName="is-active">Portfolio</NavLink></li>
        <li><NavLink to='/contact' activeClassName="is-active">Contact</NavLink></li>
      </ul>
    </div>
  );

  export default Header;