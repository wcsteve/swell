import { connect } from 'react-redux';
// import { createRoute } from '../../actions/route_actions';
import WorkOutStatsWidget from './workout_stats_widget_component';
import { withRouter } from 'react-router-dom';
import { requestWeekStats } from '../../actions/stats_actions';
import { weeklyStatTotals } from '../../selectors/stat_selectors';

const mapStateToProps = (state) => {
  const lastWeekStats = weeklyStatTotals(state.entities.workouts)
  return ({
    currentUser: state.session.currentUser,
    lastWeekWorkouts: lastWeekStats[0],
    lastWeekTotals: lastWeekStats[1],
    annualTotalDistance: 0,
  })
}

const mapDispatchToProps = (dispatch) => ({
  fetchWeekStats: () => dispatch(requestWeekStats())
})

export default connect(mapStateToProps, mapDispatchToProps)(WorkOutStatsWidget);
