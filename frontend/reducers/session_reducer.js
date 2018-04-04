import merge from 'lodash/merge';
import { RECEIVE_CURRENT_USER, RECEIVE_ERRORS } from '../actions/session_actions';

const defaultUser = { currentUser: null }

const sessionReducer = (state = defaultUser, action) => {
  Object.freeze(state);
    let newState;
    switch (action.type) {
      case RECEIVE_CURRENT_USER:
        newState = merge({}, state);
        newState.currentUser = action.currentUser
        return newState
      default:
        return state;
    }
}

export default sessionReducer;
