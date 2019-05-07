import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import { Main, UserSpace, Projects } from 'components';

const App = () => (
  <Switch>
    <Route exact path={['/', '/login', '/registration']} component={Main} />
    <Route
      path="/secure"
      render={props => (
        <UserSpace {...props}>
          <Switch>
            <Redirect exact from="/secure" to="/secure/dashboard" replace />
            <Route path="/secure/dashboard" render={() => 'Dashboard'} />
            <Route path="/secure/projects" component={Projects} />
            <Route path="/secure/help" render={() => 'Help'} />
            <Route path="/secure/account" render={() => 'Account'} />
            <Redirect to="/not-found" replace />
          </Switch>
        </UserSpace>
      )}
    />
    <Route render={() => 'Not Found'} />
  </Switch>
);

export default App;
