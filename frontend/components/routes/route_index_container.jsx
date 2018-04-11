import { connect } from 'react-redux';
import { requestAllRoutes, deleteRoute } from '../../actions/route_actions';
import { selectUserRoutes } from "../../selectors/routes_selector";
import RouteIndex from './routes_index';

const mapStateToProps = (state) => {

  return {
  routes: selectUserRoutes(state)
}};

const mapDispatchToProps = (dispatch) => ({
  requestAllRoutes: () => dispatch(requestAllRoutes()),
  deleteRoute: (routeId) => dispatch(deleteRoute(routeId)),
})


export default connect(mapStateToProps, mapDispatchToProps)(RouteIndex);
