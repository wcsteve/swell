import { connect } from 'react-redux';
import { signin } from '../../actions/session_actions';
import SessionForm from './session_form'

const mapStateToProps = (state, ownProps) => ({
  errors: state.errors.session,
  formType: "Sign In",
  formClass: "sign-in-background"
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  processForm: (user) => dispatch(signin(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
