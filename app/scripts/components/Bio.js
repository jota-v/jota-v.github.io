import React from 'react';
import Radium from 'radium';
import uiVariables from './../utils/uiVariables';

const styles = {
  bio: {
    display: 'flex',
  },
  colLarge: {
    minHeight: '20em',
    padding: '5%',
    background: uiVariables.gray1010,

    '@media (min-width: 768px)': {
      flexBasis: '60%',
      maxWidth: '60%',
    },
  },
  colSmall: {
    display: 'none',

    '@media (min-width: 768px)': {
      display: 'block',
      flexBasis: '40%',
      maxWidth: '40%',
      background: uiVariables.gray200,
    },
  },
  bioPic: {
    display: 'block',
    width: '100%',
    opacity: '0.35',
  },
  title: {
    marginBottom: '1.3em',
    fontSize: '1.5em',
    color: uiVariables.gray300,
  },
};

class Bio extends React.Component {
  render() {
    return (
      <section style={styles.bio}>
        <div style={styles.colSmall}>
          <img src="images/jv__small.jpg" alt="Juan Vanni" style={styles.bioPic} />
        </div>
        <div style={styles.colLarge}>
          <div>
            <h2 style={styles.title}>I'm a passionate UI developer specialized in mobile and adaptive experiences.</h2>
            <p>My name is Juan Vanni. I'm a passionate front-end developer - specialized in UI and mobile -, UX designer and speaker. I stand out for writing neat, performant and scalable code, as also designing very well cared, thoughtful user experiences.</p>
            <p>I'm a very detail oriented professional always focused on achieving outstanding results. I love what I do and that's the fuel that gets me on delivering high quality products.</p>
            <button className="btn">VIEW MORE</button>
          </div>
        </div>
      </section>
    );
  }
}

module.exports = Radium(Bio);
