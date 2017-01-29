import React from 'react';
import Carousel from 'nuka-carousel';
import Styles from './highlights.css';

const Highlights = function render() {
  return (
    <section className={Styles.highlights}>
      <Carousel edgeEasing="easeOutQuart">
        <div className={Styles.sliderItem}>
          <div className={Styles.colLarge}>
            <p className={Styles.sliderItemInfo}>I'm a very detail oriented professional always focused on achieving
            outstanding results. I love what I do and that's the fuel that gets me
            on delivering high quality products.</p>
          </div>
          <div className={Styles.colSmall}>
            <img className={Styles.img} src="images/highlights/001-Slider-Waykup.png" alt="Waykup" />
          </div>
        </div>
        <div className={Styles.sliderItem}>
          <div className={Styles.colLarge}>
            <p className={Styles.sliderItemInfo}>I'm a very detail oriented professional always focused on achieving
            outstanding results. I love what I do and that's the fuel that gets me
            on delivering high quality products.</p>
          </div>
          <div className={Styles.colSmall}>
            <img className={Styles.img} src="images/highlights/002-Slider-ML.png" alt="Mercado Libre" />
          </div>
        </div>
        <div className={Styles.sliderItem}>
          <div className={Styles.colLarge}>
            <p className={Styles.sliderItemInfo}>I'm a very detail oriented professional always focused on achieving
            outstanding results. I love what I do and that's the fuel that gets me
            on delivering high quality products.</p>
          </div>
          <div className={Styles.colSmall}>
            <img className={Styles.img} src="images/highlights/003-Slider-Preguntados.png" alt="Preguntados" />
          </div>
        </div>
      </Carousel>
    </section>
  );
};

module.exports = Highlights;
