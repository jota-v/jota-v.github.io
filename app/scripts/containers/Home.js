import React from 'react';
import Hero from './../components/Hero';
import Bio from './../components/Bio';
import Highlights from './../components/Highlights';

class Home extends React.Component {
  render() {
    return (
      <div>
        <Hero />
        <Bio />
        <Highlights />
      </div>
    );
  }
}

export default Home;
