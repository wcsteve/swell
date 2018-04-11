import {RECEIVE_WORKOUTS, RECEIVE_WORKOUT, REMOVE_WORKOUT} from '../../actions/workout_actions'
import merge from 'lodash/merge';

const workoutsReducer = (state = {}, action ) => {
  Object.freeze(state);
  let newState;
  switch (action.type) {
    case RECEIVE_WORKOUTS:
      newState = merge({}, state);
      return merge(newState, action.workouts);
    case RECEIVE_WORKOUT:
      newState = merge({}, state);
      newState[action.workout.id] = action.workout
      return newState;
    case REMOVE_WORKOUT:
      newState = merge({}, state);
      delete newState[action.workoutId]
      return newState;
    default:
      return state;
  }
}

export default workoutsReducer;
