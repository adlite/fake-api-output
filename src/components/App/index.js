// Vendor
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import CssBaseline from '@material-ui/core/CssBaseline';
import 'typeface-roboto';
// Routes
import routes from '../../routes';
import NotFound from '../../pages/NotFound';
// Store
import store from '../../store';

const App = () => (
  <React.Fragment>
    <CssBaseline />
    <Provider store={store}>
      <Router>
        <Switch>
          {routes.map((route, index) => <Route {...route} key={index} />)}
          <Route component={NotFound} />
        </Switch>
      </Router>
    </Provider>
  </React.Fragment>
);

export default App;
