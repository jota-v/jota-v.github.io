import React from 'react';
import Styles from './brands.css';

const Brands = function render() {
  return (
    <section className={Styles.brands}>
      <ul>
        <li><img src="./images" /></li>
      </ul>
    </section>
  );
};

module.exports = Brands;
