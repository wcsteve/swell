import { RECEIVE_ERRORS,
  RECEIVE_WORKOUTS,
  RECEIVE_WORKOUT,
  REMOVE_WORKOUT
} from '../../actions/workout_actions';

const workoutErrorsReducer = (state = [], action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ERRORS:
      return action.errors
    case RECEIVE_WORKOUTS:
    case RECEIVE_WORKOUT:
    case REMOVE_WORKOUT:
      return [];
    default:
      return state;
  }
}

export default workoutErrorsReducer;
