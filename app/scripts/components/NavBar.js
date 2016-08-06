import React from 'react';
import { Link } from 'react-router';
import Radium from 'radium';
import stylesVars from './../utils/stylesVars';

let styles = {
  bar: {
    position: 'fixed',
    top: 0,
    zIndex: 9,
    width: '100%',
    lineHeight: '50px',
    background: 'rgba(0,0,0,0.0)',
  },
  logo: {
    float: 'left',
    color: '#fff',
  },
  menu: {
    float: 'right',
    color: '#fff',
  },
  menuItems: {
    display: 'inline-block',
  },
  menuLink: {
    margin: '0 10px',
    color: stylesVars.gray1020,

    ':hover': {
      color: 'blue'
    }
  }
};

class NavBar extends React.Component {
  render() {
    return (
      <nav className="mullet-clearfix" role="navigation" style={styles.bar}>
        <div className="l-container">
          <Link to="/" style={styles.logo}>JV</Link>
          <ul style={styles.menu}>
            <li style={styles.menuItems}><Link to="/about" style={styles.menuLink}>ABOUT</Link></li>
            <li style={styles.menuItems}><Link to="/work" style={styles.menuLink}>WORK</Link></li>
          </ul>
        </div>
      </nav>
    );
  }
}

module.exports = Radium(NavBar);
