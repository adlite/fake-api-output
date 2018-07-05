// Vendor
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// Routes
import routes from '../../routes';
import NotFound from '../../pages/NotFound';
// Styles
import './style.css';

const App = () => (
  <Router>
    <Switch>
      {routes.map((route, index) => <Route {...route} key={index} />)}
      <Route component={NotFound} />
    </Switch>
  </Router>
);

export default App;
