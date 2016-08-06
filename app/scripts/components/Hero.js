import React from 'react';
import Radium from 'radium';
import stylesVars from './../utils/stylesVars';

let styles = {
  hero: {
    height: '98vh',
    textAlign: 'center',
    backgroundColor: stylesVars.gray200,
    backgroundImage: 'url(images/hero-block.png)',
    backgroundSize: '700px auto',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'left center'
  },
  heroTitle: {
    padding: '41vh 0 0',
    color: '#fff',
    fontSize: '3.5em',
    fontWeight: '400'
  },
  subTitle: {
    fontSize: '1em',
    color: '#fff',
  }
};

class Hero extends React.Component {
  render() {
    return (
      <section style={styles.hero}>
        <h1 style={styles.heroTitle}>Building done right</h1>
        <p style={styles.subTitle}>Neat, adaptive and performant UIs. This is JV's 2016 Portfolio.</p>
      </section>
    );
  }
}

module.exports= Radium(Hero);
