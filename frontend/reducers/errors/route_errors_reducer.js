import { RECEIVE_ERRORS,
  RECEIVE_ROUTES,
  RECEIVE_ROUTE,
  REMOVE_ROUTE
} from '../../actions/route_actions';

const routeErrorsReducer = (state = [], action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ERRORS:
      return action.errors
    case RECEIVE_ROUTES:
    case RECEIVE_ROUTE:
    case REMOVE_ROUTE:
      return [];
    default:
      return state;
  }
}

export default routeErrorsReducer;
