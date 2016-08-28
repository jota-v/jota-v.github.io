import React from 'react';
import Carousel from 'nuka-carousel';
import Styles from './highlights.css';

const Highlights = function render() {
  return (
    <section style={Styles.highlights}>
      <Carousel>
        <div style={Styles.sliderItem}>
          <div style={Styles.colSmall}>
            <img src="images/highlights/001-Slider-Waykup.png" alt="Waykup" />
          </div>
          <div style={Styles.colLarge}>
            <p>I'm a very detail oriented professional always focused on achieving
            outstanding results. I love what I do and that's the fuel that gets me
            on delivering high quality products.</p>
          </div>
        </div>
        <div style={Styles.sliderItem}>
          <div style={Styles.colSmall}>
            <img src="images/highlights/002-Slider-ML.png" alt="Mercado Libre" />
          </div>
          <div style={Styles.colLarge}>
            <p>I'm a very detail oriented professional always focused on achieving
            outstanding results. I love what I do and that's the fuel that gets me
            on delivering high quality products.</p>
          </div>
        </div>
        <div style={Styles.sliderItem}>
          <div style={Styles.colSmall}>
            <img src="images/highlights/003-Slider-Preguntados.png" alt="Preguntados" />
          </div>
          <div style={Styles.colLarge}>
            <p>I'm a very detail oriented professional always focused on achieving
            outstanding results. I love what I do and that's the fuel that gets me
            on delivering high quality products.</p>
          </div>
        </div>
      </Carousel>
    </section>
  );
};

module.exports = Highlights;
