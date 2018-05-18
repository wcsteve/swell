import { combineReducers } from "redux";
import sessionErrorsReducer from "./errors/session_errors_reducer";
import routeErrorsReducer from './errors/route_errors_reducer';
import workoutErrorsReducer from './errors/workout_errors_reducer';
import statsErrorsReducer from './errors/stats_errors_reducer';

const errorsReducer = combineReducers({
  session: sessionErrorsReducer,
  route: routeErrorsReducer,
  workout: workoutErrorsReducer,
  stat: statsErrorsReducer,
})

export default errorsReducer;
