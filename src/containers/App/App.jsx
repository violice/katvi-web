import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import {
  Main,
  Secure,
  Project,
  Projects,
  Board,
  NotFound,
} from 'components';

const App = () => (
  <Switch>
    <Route exact path={['/', '/login', '/registration']} component={Main} />
    <Route
      path="/secure"
      render={secureRouteProps => (
        <Secure {...secureRouteProps}>
          <Switch>
            <Redirect exact from="/secure" to="/secure/dashboard" replace />
            <Route path="/secure/dashboard" render={() => 'Dashboard'} />
            <Redirect exact from="/secure/projects/:id" to="/secure/projects/:id/board" replace />
            <Route
              path="/secure/projects/:id"
              render={projectRouteProps => (
                <Project {...projectRouteProps}>
                  <Switch>
                    <Route path="/secure/projects/:id/board" component={Board} />
                    <Route path="/secure/projects/:id/reports" render={() => 'Reports'} />
                    <Route path="/secure/projects/:id/docs" render={() => 'Docs'} />
                    <Route path="/secure/projects/:id/tags" render={() => 'Tags'} />
                    <Redirect to="/not-found" replace />
                  </Switch>
                </Project>
              )}
            />
            <Route path="/secure/projects" component={Projects} />
            <Route path="/secure/help" render={() => 'Help'} />
            <Route path="/secure/account" render={() => 'Account'} />
            <Redirect to="/not-found" replace />
          </Switch>
        </Secure>
      )}
    />
    <Route component={NotFound} />
  </Switch>
);

export default App;
