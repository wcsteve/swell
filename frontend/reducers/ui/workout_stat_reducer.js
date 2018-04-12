import merge from 'lodash/merge';
import { RECEIVE_WORKOUT_UI } from '../../actions/ui_stat_actions';

const workoutStatReducer = (state = [], action) => {
  Object.freeze(state);
  let newState;
  switch (action.type) {
    case RECEIVE_WORKOUT_UI:
      newState = [action.workoutId];
      return newState;
    default:
      return state;
  }
}

export default workoutStatReducer;
