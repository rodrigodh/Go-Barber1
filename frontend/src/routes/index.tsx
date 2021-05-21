import React from 'react';
import { Switch, Route } from 'react-router-dom';

import SigIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={SigIn} />
    <Route path="/signup" exact component={SignUp} />
  </Switch>
);

export default Routes;
