import { connect } from 'react-redux';
import { signin, receiveErrors } from '../../actions/session_actions';
import SessionForm from './session_form'

const mapStateToProps = (state, ownProps) => ({
  errors: state.errors.session,
  formType: "Sign In",
  formClass: "sign-in-background"
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  processForm: (user) => dispatch(signin(user)),
  receiveErrors: (errors) => dispatch(receiveErrors(errors))
});

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
