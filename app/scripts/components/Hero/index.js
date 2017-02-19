import React from 'react';
import Styles from './styles';

const Hero = function render() {
  return (
    <section className={Styles.hero}>
      <h1>Building done right</h1>
      {/* <p className={Styles.subTitle}>
        Neat, adaptive and performant user interfaces.
      </p> */}
    </section>
  );
};

module.exports = Hero;
