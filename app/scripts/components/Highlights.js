import React from 'react';
import Radium from 'radium';
import Carousel from 'nuka-carousel';
import uiVariables from './../utils/uiVariables';

let styles = {
  highlights: {
    background: uiVariables.gray100,
    color: uiVariables.gray1020
  },
  colLarge: {
    flexBasis: '60%',
    maxWidth: '60%',
    minHeight: '20em',
    padding: '5%'
  },
  colSmall: {
    flexBasis: '40%',
    maxWidth: '40%',
  },
  sliderItem: {
    display: 'flex'
  }
};

class Highlights extends React.Component {
  render() {
    return (
      <section style={styles.highlights}>
        <Carousel>
          <div style={styles.sliderItem}>
            <div style={styles.colSmall}>
              <img src="images/highlights/001-Slider-Waykup.png"/>
            </div>
            <div style={styles.colLarge}>
              <p>I'm a very detail oriented professional always focused on achieving outstanding results. I love what I do and that's the fuel that gets me on delivering high quality products.</p>
            </div>
          </div>
          <div style={styles.sliderItem}>
            <div style={styles.colSmall}>
              <img src="images/highlights/002-Slider-ML.png"/>
            </div>
            <div style={styles.colLarge}>
              <p>I'm a very detail oriented professional always focused on achieving outstanding results. I love what I do and that's the fuel that gets me on delivering high quality products.</p>
            </div>
          </div>
          <div style={styles.sliderItem}>
            <div style={styles.colSmall}>
              <img src="images/highlights/003-Slider-Preguntados.png"/>
            </div>
            <div style={styles.colLarge}>
              <p>I'm a very detail oriented professional always focused on achieving outstanding results. I love what I do and that's the fuel that gets me on delivering high quality products.</p>
            </div>
          </div>
        </Carousel>
      </section>
    );
  }
}

module.exports= Radium(Highlights);
