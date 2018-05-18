import {RECEIVE_STATS, 
  RECEIVE_WEEK_STATS,
  RECEIVE_ERRORS} from '../../actions/stats_actions';
import merge from 'lodash/merge';

const statsReducer = (state = {}, action ) => {
  Object.freeze(state);
  let newState;
  switch (action.type) {
    case RECEIVE_STATS:
      return action.stats;
    case RECEIVE_WEEK_STATS:
      newState = merge({}, state);
      newState = marge(newState, action.weekStats)
      return newState;
    default:
      return state;
  }
}

export default statsReducer;
