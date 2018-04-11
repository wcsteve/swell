import { connect } from 'react-redux';
// import { createRoute } from '../../actions/route_actions';
import WorkoutFeedComponent from './workout_feed_component';
import { withRouter } from 'react-router-dom';
import { requestAllWorkouts, deleteWorkout, updateWorkout } from '../../actions/workout_actions';
import { selectUserWorkouts } from "../../selectors/routes_selector";
import { requestAllRoutes } from "../../actions/route_actions"
const mapStateToProps = (state) => {
  return {
  userWorkouts: selectUserWorkouts(state),
  userRoutes: state.entities.routes,
  currentUser: state.session.currentUser
}}

const mapDispatchToProps = (dispatch) => ({
  requestWorkouts: () => dispatch(requestAllWorkouts()),
  deleteWorkout: (workoutId) => dispatch(deleteWorkout(workoutId)),
  updateWorkout: (workout) => dispatch(updateWorkout(workout)),
})

export default connect(mapStateToProps, mapDispatchToProps)(WorkoutFeedComponent);
