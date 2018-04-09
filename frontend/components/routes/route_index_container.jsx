import { connect } from 'react-redux';
import { requestAllRoutes, deleteRoute };
import { selectUserRoutes } from "../../selectors/routes_selector";
const mapStateToProps = (state) {
  routes: selectUserRoutes(state, state.sesion.currentUser);
}
