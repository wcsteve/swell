import { RECEIVE_STATS,
  RECEIVE_WEEK_STATS,
  RECEIVE_ERRORS
} from '../../actions/stats_actions';

const statsErrorsReducer = (state = [], action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ERRORS:
      return action.errors
    case RECEIVE_WEEK_STATS:
    case RECEIVE_STATS:
      return [];
    default:
      return state;
  }
}

export default statsErrorsReducer;
