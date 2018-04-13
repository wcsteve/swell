import { connect } from 'react-redux';
// import { createRoute } from '../../actions/route_actions';
import WorkOutStatsWidget from './workout_stats_widget_component';
import { withRouter } from 'react-router-dom';
import { requestSingleWorkout, requestAllWorkouts } from '../../actions/workout_actions';
import { selectLastWeekWorkouts } from '../../selectors/routes_selector';

const mapStateToProps = (state) => {
  // let workoutId = state.ui.workout[0];

  return ({
    // singleStat: state.entities.workouts[workoutId],
    currentUser: state.session.currentUser,
    // id: workoutId,
    lastWeekWorkouts: selectLastWeekWorkouts(state)
  })
}

const mapDispatchToProps = (dispatch) => ({
  // requestSingleWorkout: (id) => dispatch(requestSingleWorkout(id)),
  requestAllWorkouts: () => dispatch(requestAllWorkouts())
})

export default connect(mapStateToProps, mapDispatchToProps)(WorkOutStatsWidget);
