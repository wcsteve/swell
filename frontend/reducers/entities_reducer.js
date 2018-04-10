import { combineReducers } from "redux";
import routesReducer from './entities/routes_reducer';
import workoutsReducer from './entities/workouts_reducer';

const entitiesReducer = combineReducers({
  routes: routesReducer,
  workouts: workoutsReducer
})

export default entitiesReducer;
