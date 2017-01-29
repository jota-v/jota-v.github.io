import Inferno from 'inferno';
import { Router, Route, IndexRoute } from 'inferno-router';
import { createBrowserHistory } from 'history';


const browserHistory = createBrowserHistory();

// components
import Home from './containers/Home';
import Layout from './containers/Layout';

function NoMatch() {
  return <div>NoMatch</div>
}

const Routes = (
  <Router history={ browserHistory }>
    <Route component={ Layout }>
      <IndexRoute component={ Home }/>
      <Route path="*" component={ NoMatch }/>
    </Route>
  </Router>
);

Inferno.render(Routes, document.getElementById('app'));
