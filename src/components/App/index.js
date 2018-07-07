// Vendor
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import 'typeface-roboto';
// Routes
import routes from '../../routes';
import NotFound from '../../pages/NotFound';

const App = () => (
  <React.Fragment>
    <CssBaseline />
    <Router>
      <Switch>
        {routes.map((route, index) => <Route {...route} key={index} />)}
        <Route component={NotFound} />
      </Switch>
    </Router>
  </React.Fragment>
);

export default App;
