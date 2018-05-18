import { combineReducers } from "redux";
import routesReducer from './entities/routes_reducer';
import workoutsReducer from './entities/workouts_reducer';
import statsReducer from './entities/stats_reducer';

const entitiesReducer = combineReducers({
  routes: routesReducer,
  workouts: workoutsReducer,
  stats: statsReducer,
})

export default entitiesReducer;
