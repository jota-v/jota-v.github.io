import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import Main from './containers/Main';
import Home from './containers/Home';
import About from './containers/About';
import Work from './containers/Work';

const App = function () {
  return (
    <Router history={hashHistory}>
      <Route path="/" component={Main}>
        <IndexRoute component={Home} />
        <Route path="about" component={About} />
        <Route path="work" component={Work} />
      </Route>
    </Router>
  );
};

ReactDOM.render(
  <App />,
  document.getElementById('app')
);

export default App;
