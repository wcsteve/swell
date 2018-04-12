import { combineReducers } from "redux";
import modalReducer from "./ui/modal_reducer";
import workoutStatReducer from './ui/workout_stat_reducer'

const uiReducer = combineReducers({
  modal: modalReducer,
  workout: workoutStatReducer
})

export default uiReducer;
