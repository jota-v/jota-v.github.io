import React from 'react';
import Radium from 'radium';
import stylesVars from './../utils/stylesVars';

let styles = {
  bio: {
    display: 'flex',
  },
  colLarge: {
    flexBasis: '60%',
    maxWidth: '60%',
    minHeight: 340,
    padding: '5%',
    background: stylesVars.gray1010
  },
  colSmall: {
    flexBasis: '40%',
    maxWidth: '40%',
    background: stylesVars.gray400
  },
  bioPic: {
    display: 'block',
    width: '100%'
  },
  title: {
    marginBottom: '1.5em',
    fontSize: '1.8em',
  }
};

class Bio extends React.Component {
  render() {
    return (
      <section style={styles.bio}>
        <div style={styles.colSmall}>
          <img src="images/jv__small.jpg" style={styles.bioPic} />
        </div>
        <div style={styles.colLarge}>
          <h2 style={styles.title}>I'm a passionate UI developer specialized in mobile and adaptive experiences.</h2>
          <p>My name is Juan Vanni. I'm a passionate front-end developer - specialized in UI and mobile -, UX designer and speaker. I stand out for writing neat, performant and scalable code, as also designing very well cared, thoughtful user experiences.</p>
          <p>I'm a very detail oriented professional always focused on achieving outstanding results. I love what I do and that's the fuel that gets me on delivering high quality products.</p>
        </div>
      </section>
    );
  }
}

module.exports= Radium(Bio);
