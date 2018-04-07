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
import RouteIndex from '../routes/routes_index';
import CreateRouteFormComponent from '../routes/create_route_form_component';
import RouteFormContainer from '../routes/route_form_container';


const Main = () => (
  <div className="Main-Content">
    <Switch>
      <ProtectedRoute exact path="/user" component={User} />
      <ProtectedRoute exact path="/routes" component={RouteIndex} />
      <ProtectedRoute exact path="/routes/new" component={RouteFormContainer} />
      <Route path="/" component={Splash} />
    </Switch>
  </div>
)

export default Main;
