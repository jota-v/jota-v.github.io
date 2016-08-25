import React from 'react';
import Styles from './hero.css';

class Hero extends React.Component {
  render() {
    return (
      <section className={styles.hero}>
        <h1 className={styles.heroTitle}>Building done right</h1>
        <p className={styles.subTitle}>Neat, adaptive and performant UIs. This is JV's 2016 Portfolio.</p>
      </section>
    );
  }
}
module.exports= Hero;
