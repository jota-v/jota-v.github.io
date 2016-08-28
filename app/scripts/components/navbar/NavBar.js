import React from 'react';
import { Link } from 'react-router';
import styles from './navbar.css';

class NavBar extends React.Component {
  render() {
    return (
      <nav className={styles.bar} role="navigation">
        <div className="l-container">
          <Link to="/" className={styles.logo}>JV</Link>
          <ul className={styles.menu}>
            <li className={styles.menuItems}>
              <Link to="/about"><span ref="1" className={styles.menuLink}>ABOUT</span></Link>
            </li>
            <li className={styles.menuItems}>
              <Link to="/work"><span ref="2" className={styles.menuLink}>WORK</span></Link>
            </li>
            <li className={styles.menuItems}>
              <a href="mailto:juanvanni@icloud.com" className={styles.menuLink}>CONTACT</a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

module.exports = NavBar;
