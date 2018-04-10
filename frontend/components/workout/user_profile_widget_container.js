import React from 'react';
import { connect } from 'react-redux';
// import { createRoute } from '../../actions/route_actions';
import UserProfileWidget from './user_profile_widget_component';
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state, ownprops) => {
  debugger
  return {
    currentUser: state.session.currentUser
  }
}
//
// const mapDispatchToProps = (dispatch) => ({
//
// })

export default connect(mapStateToProps, null)(UserProfileWidget);
