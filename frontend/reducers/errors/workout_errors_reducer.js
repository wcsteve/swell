import { RECEIVE_ERRORS,
  RECEIVE_WORKOUTS,
  RECEIVE_WORKOUT,
  REMOVE_WORKOUT
} from '../../actions/workout_actions';

import { RECEIVE_ROUTES } from '../../actions/route_actions'

const workoutErrorsReducer = (state = [], action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ERRORS:
      return action.errors;
    case RECEIVE_WORKOUTS:
    case RECEIVE_WORKOUT:
    case REMOVE_WORKOUT:
    case RECEIVE_ROUTES:
      return [];
    default:
      return state;
  }
}

export default workoutErrorsReducer;
