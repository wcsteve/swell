import React from 'react';
import {
  Route,
  Redirect,
  Switch,
  HashRouter
} from 'react-router-dom'
import { AuthRoute, ProtectedRoute } from '../../util/url_route_util';
import Modal from '../modal/modal'
import Splash from './splash';
import User from './users';
// import RouteIndex from '../routes/routes_index';
import RouteIndexContainer from '../routes/route_index_container';
import RouteMapContainer from '../routes/route_map_container';


const Main = () => (
  <div className="Main-Content">
    <Switch>
      <ProtectedRoute exact path="/user" component={User} />
      <ProtectedRoute exact path="/routes" component={RouteIndexContainer} />
      <ProtectedRoute exact path="/routes/new" component={RouteMapContainer} />
      <Route path="/" component={Splash} />
    </Switch>
  </div>
)

export default Main;
