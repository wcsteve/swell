import React from 'react';
import {
  Route,
  Redirect,
  Switch,
  HashRouter
} from 'react-router-dom'
import { AuthRoute, ProtectedRoute } from '../../util/url_route_util';
import Splash from './splash';
import RouteIndexContainer from '../routes/route_index_container';
import RouteMapContainer from '../routes/route_map_container';
import UserProfileContainer from '../user_profile_container';
import WorkoutShowContainer from '../workout/workout_show_container';


const Main = () => (
  <div className="Main-Content">
    <Switch>
      <ProtectedRoute exact path="/users" component={UserProfileContainer} />
      <ProtectedRoute exact path="/routes" component={RouteIndexContainer} />
      <ProtectedRoute exact path="/routes/new" component={RouteMapContainer} />
      <ProtectedRoute exact path="/routes/:id" component={RouteMapContainer} />
      <AuthRoute path="/" component={Splash} />
    </Switch>
  </div>
)

export default Main;

// <ProtectedRoute exact path="/users/:workoutId" component={WorkoutShowContainer} />
