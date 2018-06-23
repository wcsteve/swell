import { connect } from 'react-redux';
import TrainingOverview from './training_overview';
import { requestStats } from '../../actions/stats_actions'
import { weeklyStatTotals, statTotalsByMonth } from '../../selectors/stat_selectors';
import { withRouter } from 'react-router-dom';
// import { openModal, closeModal } from '../actions/modal_actions';

const mapStateToProps = (state) => {
  const organizedStatsArray = statTotalsByMonth(state.entities.stats)
  // weeklyStats: weeklyStatTotals(state.entitites.stats),
  return {
    monthlyStats: organizedStatsArray[0],
    barHeight: organizedStatsArray[1][1],
    distanceTotal: organizedStatsArray[1][0],
    durationMinTotal: organizedStatsArray[2][0],
    elevationGainTotal: organizedStatsArray[3][0],
    activities: organizedStatsArray[4][0],
    maxStats: organizedStatsArray[5],
    stats: state.entities.stats,
  }
}

const mapDispatchToProps = (dispatch) => ({
  getStats: () => dispatch(requestStats())
})

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps)
  (TrainingOverview));
