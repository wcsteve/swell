import React from 'react';
import { Route } from 'react-router-dom';
import SignUpFormContainer from '../signin/signup_form_container';
import SignInFormContainer from '../signin/signin_form_container';

const Splash = () => (
  <div className="Splash">
    <Route path='/signup' component={SignUpFormContainer} />
    <Route path='/signin' component={SignInFormContainer} />
  </div>
)

export default Splash;
