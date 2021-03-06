import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './Route';

import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';

import Dashboard from '../pages/Dashboard';
import Details from '../pages/Details';
import CreateEdit from '../pages/CreateEdit';
import Profile from '../pages/Profile';

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={SignIn} />
      <Route path="/register" component={SignUp} />

      <Route path="/dashboard" component={Dashboard} isPrivate />
      <Route path="/details/:id" component={Details} isPrivate />
      <Route path="/(create|edit)/:id?" component={CreateEdit} isPrivate />
      <Route path="/profile" component={Profile} isPrivate />
    </Switch>
  );
}
