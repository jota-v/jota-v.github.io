import React from 'react';
import Styles from './bio.css';

class Bio extends React.Component {
  render() {
    return (
      <section className={styles.bio}>
        <div className={styles.colSmall}>
          <img src="images/jv__small.jpg" alt="Juan Vanni" className={styles.bioPic} />
        </div>
        <div className={styles.colLarge}>
          <div>
            <h2 className={styles.title}>I'm a passionate UI developer specialized in mobile and adaptive experiences.</h2>
            <p>My name is Juan Vanni. I'm a passionate front-end developer - specialized in UI and mobile -, UX designer and speaker. I stand out for writing neat, performant and scalable code, as also designing very well cared, thoughtful user experiences.</p>
            <p>I'm a very detail oriented professional always focused on achieving outstanding results. I love what I do and that's the fuel that gets me on delivering high quality products.</p>
            <button className="btn">VIEW MORE</button>
          </div>
        </div>
      </section>
    );
  }
}

module.exports = Bio;
