import { connect } from 'react-redux';
import { requestAllRoutes, deleteRoute } from '../../actions/route_actions';
import { selectUserRoutes } from "../../selectors/routes_selector";
import RouteIndex from './routes_index';
import { requestAllWorkouts } from '../../actions/workout_actions';

const mapStateToProps = (state) => {

  return {
  routes: selectUserRoutes(state)
}};

const mapDispatchToProps = (dispatch) => ({
  requestAllRoutes: () => dispatch(requestAllRoutes()),
  deleteRoute: (routeId) => dispatch(deleteRoute(routeId)),
  requestAllWorkouts: () => dispatch(requestAllWorkouts())
})


export default connect(mapStateToProps, mapDispatchToProps)(RouteIndex);
