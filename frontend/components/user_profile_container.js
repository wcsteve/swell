import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import UserProfileComponent from './user_profile_component';
import { openModal, closeModal } from '../actions/modal_actions';
import { requestAllRoutes } from '../actions/route_actions'

const mapStateToProps = (state, ownProps) => ({
  currentUser: state.session.currentUser,
})

const mapDispatchToProps = (dispatch) => ({
  openModal: (modal) => dispatch(openModal(modal)),
  requestRoutes: dispatch(requestAllRoutes()),
})

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps)
  (UserProfileComponent));
