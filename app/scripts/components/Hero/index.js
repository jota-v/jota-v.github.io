import Inferno from 'inferno';
import { css } from 'glamor';
import Styles from './styles';

const Hero = function render() {
  return (
    <section className={css(Styles.hero)}>
      <h1>Building done right</h1>
      {/* <p className={Styles.subTitle}>
        Neat, adaptive and performant user interfaces.
      </p> */}
    </section>
  );
};

module.exports = Hero;
