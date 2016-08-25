import React from 'react';
import Hero from './../components/hero/Hero';
import Bio from './../components/bio/Bio';
import Highlights from './../components/Highlights';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

class Home extends React.Component {
  render() {
    return (
      <ReactCSSTransitionGroup transitionName="fade-in" transitionAppear={true} transitionEnterTimeout={500} transitionAppearTimeout={500} transitionLeaveTimeout={500}>
        <Hero />
        <Bio />
        <Highlights />
      </ReactCSSTransitionGroup>
    );
  }
}

export default Home;
