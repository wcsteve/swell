import { combineReducers } from "redux";
import sessionErrorsReducer from "./errors/session_errors_reducer";
import routeErrorsReducer from './errors/route_errors_reducer';

const errorsReducer = combineReducers({
  session: sessionErrorsReducer,
  route: routeErrorsReducer
})

export default errorsReducer;
