import React from 'react';
import Styles from './bio.css';

const Bio = function render() {
  return (
    <section className={Styles.bio}>
      <div className={Styles.colSmall}>
        <img src="images/jv__small.jpg" alt="Juan Vanni" className={Styles.bioPic} />
      </div>
      <div className={Styles.colLarge}>
        <div>
          <h2 className={Styles.title}>Neat, adaptive and performant user interfaces.</h2>
          <div className={Styles.textBlock}>
            <p>My name is Juan Vanni. I'm a passionate front-end engineer -specialized in UI and mobile -, UX designer and speaker. I stand out for writing neat, performant and scalable code, as also designing very well cared, thoughtful user experiences.</p>
            <p>I'm a very detail oriented professional always focused on achieving outstanding results. I love what I do and that's the fuel that gets me on delivering high quality products.</p>
            <button className={Styles.actionBtn + ' ' + 'ui-btn ui-btn--block'}>VIEW MORE</button>
          </div>
        </div>
      </div>
    </section>
  );
};

module.exports = Bio;
