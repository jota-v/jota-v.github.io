import React from 'react';
import Hero from './../components/hero/Hero';
import Bio from './../components/bio/Bio';
import Highlights from './../components/highlights/Highlights';
import Brands from './../components/brands/Brands';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

const Home = function render() {
  return (
    <ReactCSSTransitionGroup
      transitionName="fade-in"
      transitionAppear
      transitionEnterTimeout={500}
      transitionAppearTimeout={500}
      transitionLeaveTimeout={500}
    >
      <Hero />
      <Bio />
      <Highlights />
      <Brands />
    </ReactCSSTransitionGroup>
  );
};

export default Home;
