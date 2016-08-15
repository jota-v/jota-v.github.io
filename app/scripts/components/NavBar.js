import React from 'react';
import { Link } from 'react-router';
import Radium from 'radium';
import uiVariables from './../utils/uiVariables';

let styles = {
  bar: {
    position: 'fixed',
    top: 0,
    zIndex: 9,
    width: '100%',
    padding: '0 1em',
    lineHeight: '50px',
    background: 'rgba(0,0,0,0.0)',
  },
  logo: {
    float: 'left',
    color: '#fff',
    fontSize: '1.2em',
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
    color: uiVariables.gray1020,
    fontSize: '.85em',
    fontWeight: 300,
    letterSpacing: 2,

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
            <li style={styles.menuItems}><Link to="/about"><span ref="1" style={styles.menuLink}>ABOUT</span></Link></li>
            <li style={styles.menuItems}><Link to="/work"><span ref="2" style={styles.menuLink}>WORK</span></Link></li>
            <li style={styles.menuItems}><a href="mailto:juanvanni@icloud.com" style={styles.menuLink}>CONTACT</a></li>
          </ul>
        </div>
      </nav>
    );
  }
}

module.exports = Radium(NavBar);
