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
    this.handleDemoSubmit = this.handleDemoSubmit.bind(this)
  }

  handleInput(field){
    return (e) => this.setState({ [field]: e.target.value});
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user).then(() => {
      this.props.history.push(`/users/`);
    });
  }

  handleDemoSubmit(e) {
    e.preventDefault();
    this.setState({username: "lanceArmstrong", password: "password"},
    () => {
      const user = Object.assign({}, this.state);
      this.props.processForm(user).then(() => this.props.history.push("/users"));
    })
  }

  renderErrors() {
    return(
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  render(){


    let welcomeMessage = undefined;
    if (this.props.formType === "Sign Up"){
      welcomeMessage =
      <div className="session-welcome">
        <h2>Sign Up</h2>
      </div>;
    } else {
      welcomeMessage =
      <div className="session-welcome">
        <h2>Sign In</h2>
      </div>;
    }

    let email = undefined;
    if (this.props.formType === "Sign Up"){
      email =

        <input className="session-form-input user-input"
          type="text"
          onChange={this.handleInput("email")}
          value={this.state.email}
          placeholder="Your email"
          />
    }

    let demo = undefined
    if (this.props.formType === "Sign In"){
      demo =
      <input
        className="session-form-input demo-link"
        type="submit"
        value="Demo"
        onClick={this.handleDemoSubmit}/>
    }



    return(
      <div className={this.props.formClass}>


        <form className="sessionform">
          {welcomeMessage}
          {this.renderErrors()}
          <fieldset className="session-fieldset">

              <input className="session-form-input user-input"
                type="text"
                onChange={this.handleInput("username")}
                value={this.state.username}
                placeholder="Username"/>

              <input className="session-form-input user-input"
                type="password"
                onChange={this.handleInput("password")}
                value={this.state.password}
                placeholder="Password"/>

            {email}


          <input
            type ="submit"
            className="session-form-input session-link"
            value={this.props.formType}
            onClick={this.handleSubmit}
            />

          {demo}

        </fieldset>
        </form>
      </div>
    )
  }
}

export default SessionForm;
