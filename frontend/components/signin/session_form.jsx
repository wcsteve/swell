import React from 'react';
import { Link } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      email: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInput(field){
    return (e) => this.setState({ [field]: e.target.value});
  }

  handleSubmit(e) {
    e.preventDefault;
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
  }

  render(){

    let formTitle = this.props.formType === "signup" ?
      <h1>Join Now!</h1> : <h1>Sign In!</h1>;

    let welcomeMessage = undefined;
    if (this.props.formType === "signup"){
      welcomeMessage =
      <div className="Session-Welcome">
        <h2>Sign up for free</h2>
        <h3>Come ride the swell</h3>
      </div>;
    } else {
      welcomeMessage =
      <div className="Session-Welcome">
        <h2>Welcome Back</h2>
        <h3>Ready to get caught up in the swell?</h3>
      </div>;
    }

    let email = undefined;
    if (this.props.formType === "signup"){
      email =
      <label> Email
        <input className="Session-Form-Input"
          type="text"
          onChange={this.handleInput("email")}
          value={this.state.email}/>
      </label>
    }

    const renderErrors =
      <ul>
          {this.props.errors.map(
            (err) => (<li key={err}>{err}</li>)
          )}
      </ul>;

    return(
      <div>

        {renderErrors}

        <form className="SessionForm">
          {welcomeMessage}
          {formTitle}

          <fieldset className="Session-Fieldset">
            <label> Username
              <input className="Session-Form-Input"
                type="text"
                onChange={this.handleInput("username")}
                value={this.state.username}/>
            </label>

            <label> Password
              <input className="Session-Form-Input"
                type="password"
                onChange={this.handleInput("password")}
                value={this.state.password}/>
            </label>

            {email}


          <Link to="/" onClick={this.handleSubmit}>{this.props.formType}</Link>
        </fieldset>
        </form>
      </div>
    )
  }
}

export default SessionForm;
