import { connect } from 'react-redux';
import { createRoute } from '../../actions/route_actions';
import CreateRouteFormComponent from './create_route_form_component';
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state, ownProps) => ({
  currentUser: state.session.currentUser,
  errors: state.errors.route
})

const mapDispatchToProps = (dispatch) => ({
  create: (route) => dispatch(createRoute(route)),
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CreateRouteFormComponent));
