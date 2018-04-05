import React from 'react';
import GreetingContainer from './greeting/greeting_container';
import SignUpFormContainer from './signin/signup_form_container';
import SignInFormContainer from './signin/signin_form_container';
import { Route } from 'react-router-dom';
import Header from './header/header'
import Main from './main/main'

const App = () => (
  <div className="EntirePageBody">
    <Header />
    <Main />
  </div>
)

// <Route path='/signup' component={SignUpFormContainer} />
// <Route path='/signin' component={SignInFormContainer} />
export default App
