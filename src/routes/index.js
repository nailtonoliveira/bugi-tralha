import React from 'react';
import { Switch, Redirect } from 'react-router-dom';
import Route from './Route';

import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import Home from '../pages/Home';

export default function Routes() {
  return (
    <Switch>
      <Route path="/sign-in" exact component={SignIn} />
      <Route path="/sign-up" exact component={SignUp} />
      <Route path="/home" component={Home} isPrivate />

      {/* redirect user to SignIn page if route does not exist and user is not authenticated */}
      <Redirect exact from="*" to="/sign-in" />
    </Switch>
  );
}
