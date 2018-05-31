import React from 'react';
import { Route, Switch, Redirect,} from 'react-router-dom';
import SignUpFormContainer from '../signin/signup_form_container';
import SignInFormContainer from '../signin/signin_form_container';
import DemoFormContainer from '../signin/demo_form_container';
import { AuthRoute, ProtectedRoute } from '../../util/url_route_util';


const HomePage = () => (
  <main className="home-page-background">
    <div className="splash-header">
      <h1>
        The App for Fitness Enthusiasts
        <br/>
        It's Time to Get Swell
      </h1>
    </div>
  </main>
)

const Splash = () => (
  <div className="Splash">
    <Switch>
      <AuthRoute path='/signup' component={SignUpFormContainer} />
      <AuthRoute path='/signin' component={SignInFormContainer} />
      <AuthRoute path='/demo' component={DemoFormContainer} />
      <AuthRoute exact path='/' component={HomePage} />
      <Redirect to='/' />
    </Switch>
  </div>
)

export default Splash;
