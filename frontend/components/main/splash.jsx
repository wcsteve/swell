import React from 'react';
import { Route } from 'react-router-dom';
import SignUpFormContainer from '../signin/signup_form_container';
import SignInFormContainer from '../signin/signin_form_container';


const HomePage = () => (
    <div className="splash-header">
      <h1>
        The App for Fitness Enthusiasts
        <br/>
        It's Time to Get Swell
      </h1>
    </div>
)

const Splash = () => (
  <div className="Splash">
    <Route path='/signup' component={SignUpFormContainer} />
    <Route path='/signin' component={SignInFormContainer} />
    <Route exact path='/' component={HomePage} />
  </div>
)

export default Splash;
