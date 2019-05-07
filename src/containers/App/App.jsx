import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import { Main, UserSpace } from 'components';

const App = () => (
  <Switch>
    <Route exact path={['/', '/login', '/registration']} component={Main} />
    <Route
      path="/secure"
      render={props => (
        <UserSpace {...props}>
          <Switch>
            <Route path="/secure/dashboard" render={() => 'Dashboard'} />
            <Route path="/secure/projects" render={() => 'Projects'} />
            <Redirect to="/not-found" replace />
          </Switch>
        </UserSpace>
      )}
    />
    <Route render={() => 'Not Found'} />
  </Switch>
);

export default App;
