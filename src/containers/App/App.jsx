import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { Main } from 'components';

const App = () => (
  <Switch>
    <Route exact path={['/', '/login', '/registration']} component={Main} />
  </Switch>
);

export default App;
