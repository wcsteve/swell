import { connect } from 'react-redux';
import { createRoute } from '../../actions/route_actions';
import CreateRouteFormComponent from './create_route_form_component'

const mapStateToProps = (state) => ({
  currentUser: state.session.currentUser
})

const mapDispatchToProps = (dispatch) => ({
  create: (route) => dispatch(createRoute(route))
})

export default connect(mapStateToProps, mapDispatchToProps)(CreateRouteFormComponent);
