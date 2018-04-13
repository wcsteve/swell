import { connect } from 'react-redux';
import WorkoutFeedComponent from './workout_feed_component';
import { requestAllWorkouts, deleteWorkout, updateWorkout } from '../../actions/workout_actions';
import { selectUserWorkouts } from "../../selectors/routes_selector";
import { requestAllRoutes } from "../../actions/route_actions"
import { openModal } from '../../actions/modal_actions';
import {receiveSingleUiStat} from '../../actions/ui_stat_actions'


const mapStateToProps = (state) => {
  return {
  userWorkouts: selectUserWorkouts(state),
  userRoutes: state.entities.routes,
  currentUser: state.session.currentUser
}}

const mapDispatchToProps = (dispatch) => ({
  requestWorkouts: () => dispatch(requestAllWorkouts()),
  requestAllRoutes: () => dispatch(requestAllRoutes()),
  deleteWorkout: (workoutId) => dispatch(deleteWorkout(workoutId)),
  updateWorkout: (workout) => dispatch(updateWorkout(workout)),
  openModal: (modal) => dispatch(openModal(modal)),
  requestWorkoutId: (id) => dispatch(receiveSingleUiStat(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(WorkoutFeedComponent);
