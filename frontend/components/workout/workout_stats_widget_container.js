import { connect } from 'react-redux';
// import { createRoute } from '../../actions/route_actions';
import WorkOutStatsWidget from './workout_stats_widget_component';
import { withRouter } from 'react-router-dom';
import { requestAllWorkouts } from '../../actions/workout_actions';

const mapStateToProps = (state) => ({
  userWorkouts: state.entities.workouts,
  currentUser: state.session.currentUser
})

const mapDispatchToProps = (dispatch) => ({
  requestAllWorkouts: () => dispatch(requestAllWorkouts())
})

export default connect(mapStateToProps, mapDispatchToProps)(WorkOutStatsWidget);
