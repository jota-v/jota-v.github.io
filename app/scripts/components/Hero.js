import React from 'react';
import Radium from 'radium';
import uiVariables from './../utils/uiVariables';

let styles = {
  hero: {
    minHeight: '28em',
    textAlign: 'center',
    backgroundColor: uiVariables.gray200,
    backgroundImage: 'url(images/hero-block.png)',
    backgroundSize: '30em auto',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundAttachment: 'fixed',

    '@media (min-width: 768px)': {
      height: '100vh',
      backgroundPosition: 'left center',
      // backgroundSize: '700px auto',
    }
  },
  heroTitle: {
    padding: '2.5em 1em 0.5em',
    color: '#fff',
    fontSize: '12vw',
    fontWeight: '300',

    '@media (min-width: 768px)': {
      padding: '41vh 0 0',
      fontSize: '3.5em',
    }
  },
  subTitle: {
    padding: '0 1em',
    fontSize: '1em',
    color: '#fff',
  }
};

class Hero extends React.Component {
  render() {
    return (
      <section style={styles.hero} className="hero">
        <h1 style={styles.heroTitle}>Building done right</h1>
        <p style={styles.subTitle}>Neat, adaptive and performant UIs. This is JV's 2016 Portfolio.</p>
      </section>
    );
  }
}

module.exports= Radium(Hero);
