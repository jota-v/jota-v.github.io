import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Work from './pages/Work';

const App = function render() {
  return (
    <Router history={hashHistory}>
      <Route path="/" component={Layout}>
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
