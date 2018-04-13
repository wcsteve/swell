import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import WorkOutFormComponent from './workout_form_component';
import { createWorkout } from '../../actions/workout_actions';
import { requestAllRoutes } from '../../actions/route_actions';
import { openModal, closeModal } from '../../actions/modal_actions';
import { selectUserRoutes } from "../../selectors/routes_selector";

const mapStateToProps = (state, ownProps) => ({
  currentUser: state.session.currentUser,
  formType: 'workout',
  routes: selectUserRoutes(state),
  errors: state.errors.workout
})

const mapDispatchToProps = (dispatch) => ({
  requestAllRoutes: () => dispatch(requestAllRoutes()),
  processForm: (workout) => dispatch(createWorkout(workout)),
  closeModal: () => dispatch(closeModal())
})

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps)
  (WorkOutFormComponent));
