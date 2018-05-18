import React from 'react';
import {
  Route,
  Switch,
} from 'react-router-dom'
import { AuthRoute, ProtectedRoute } from '../../util/url_route_util';
import Splash from './splash';
import RouteIndexContainer from '../routes/route_index_container';
import RouteMapContainer from '../routes/route_map_container';
import UserProfileContainer from '../user_profile_container';
import TrainingOverview from '../training_stats/training_construction';


const Main = () => (
  <div className="Main-Content">
    <Switch>
      <ProtectedRoute exact path="/users" component={UserProfileContainer} />
      <ProtectedRoute exact path="/routes" component={RouteIndexContainer} />
      <ProtectedRoute exact path="/routes/new" component={RouteMapContainer} />
      <ProtectedRoute exact path="/training" component={TrainingOverview} />
      <AuthRoute path="/" component={Splash} />
    </Switch>
  </div>
)

export default Main;
