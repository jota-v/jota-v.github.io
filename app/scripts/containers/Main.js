import React from 'react';
import NavMenu from './../components/NavMenu';

class Main extends React.Component {
  render() {
    return (
      <div>
        <NavMenu />
        {this.props.children}
      </div>
    );
  }
}

export default Main;
