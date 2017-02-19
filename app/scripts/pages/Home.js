import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import Hero from '../components/Hero';

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

    </ReactCSSTransitionGroup>
  );
};

export default Home;
