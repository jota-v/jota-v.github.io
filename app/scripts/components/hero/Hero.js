import React from 'react';
import Styles from './hero.css';

const Hero = function render() {
  return (
    <section className={Styles.hero}>
      <h1 className={Styles.heroTitle}>Building done right</h1>
      <p className={Styles.subTitle}>
        Neat, adaptive and performant UIs. This is JV's 2016 Portfolio.
      </p>
    </section>
  );
};

module.exports = Hero;
