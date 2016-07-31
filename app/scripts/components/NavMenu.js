import React from 'react';
import { Link } from 'react-router';

class NavMenu extends React.Component {
  render() {
    return (
      <nav role="navigation">
        <Link to="/">Home</Link>
        <ul>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/work">Work</Link></li>
        </ul>
      </nav>
    );
  }
}

export default NavMenu;
