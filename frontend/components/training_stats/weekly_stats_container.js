import { connect } from 'react-redux';
import WeeklyStats from './weekly_stats_component';
import { withRouter } from 'react-router-dom';
import { requestAllWorkouts } from '../../actions/workout_actions'
import { selectedMonthWorkout } from '../../selectors/workout_selectors';

const mapStateToProps = (state, ownProps) => {
  const year = ownProps.match.params.year;
  const month = ownProps.match.params.month;
  return {
    selectedWorkouts: selectedMonthWorkout(state.entities.workouts, year, month),
  }
}

const mapDispatchToProps = (dispatch) => ({
  requestWorkouts: () => dispatch(requestAllWorkouts()),
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(WeeklyStats));
