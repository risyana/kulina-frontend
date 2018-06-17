import React from 'react';
import logo from '../../../images/kulina-logo-white.svg';

const Navigation = props => (
  <nav>
    <img alt="logo" src={logo} />
    <ul>
      <li>
        <a href="null"> About Us</a>
      </li>
      <li>
        <a href="null" className="active"> Career</a>
      </li>
      <li>
        <a href="null"> Internship</a>
      </li>
    </ul>
  </nav>
);

export default Navigation;
