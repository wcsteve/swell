import { connect } from 'react-redux';
import { requestAllRoutes, deleteRoute } from '../../actions/route_actions';
import { selectUserRoutes } from "../../selectors/routes_selector";
import RouteIndex from './routes_index';
import { requestAllWorkouts } from '../../actions/workout_actions';
import { receiveSingleUiStat } from '../../actions/ui_stat_actions';

const mapStateToProps = (state) => {

  return {
  routes: selectUserRoutes(state)
}};

const mapDispatchToProps = (dispatch) => ({
  requestAllRoutes: () => dispatch(requestAllRoutes()),
  deleteRoute: (routeId) => dispatch(deleteRoute(routeId)),
  requestAllWorkouts: () => dispatch(requestAllWorkouts()),
  requestUiStat: () => dispatch(receiveSingleUiStat())
})


export default connect(mapStateToProps, mapDispatchToProps)(RouteIndex);
