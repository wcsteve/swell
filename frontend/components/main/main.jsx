import React from 'react';
import {
  Route,
  Redirect,
  Switch,
  HashRouter
} from 'react-router-dom'
import { AuthRoute, ProtectedRoute } from '../../util/url_route_util';
import Splash from './splash';
import User from './users';

const Main = () => (
  <div className="Main-Content">
    <Switch>
      <ProtectedRoute exact path="/user" component={User} />
      <Route path="/" component={Splash} />
    </Switch>
  </div>
)

export default Main;
