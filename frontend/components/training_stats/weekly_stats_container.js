import { connect } from 'react-redux';
import WeeklyStats from './weekly_stats_component';
import { withRouter } from 'react-router-dom';
import { requestAllWorkouts } from '../../actions/workout_actions'
import { selectedMonthWorkout } from '../../selectors/workout_selectors';

const mapStateToProps = (state, ownProps) => {
  const year = parseInt(ownProps.match.params.year);
  const month = parseInt(ownProps.match.params.month);
  return {
    selectedWorkouts: selectedMonthWorkout(state.entities.workouts, year, month),
    month: month,
    year: year,
  }
}

const mapDispatchToProps = (dispatch) => ({
  requestWorkouts: () => dispatch(requestAllWorkouts()),
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(WeeklyStats));
