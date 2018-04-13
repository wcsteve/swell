import React from 'react';
import { Link } from 'react-router-dom';


class WorkOutFormComponent extends React.Component{
  constructor(props){
    super(props)
    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleSelectChange = this.handleSelectChange.bind(this);
    this.handleTimeInput = this.handleTimeInput.bind(this);
    this.computeTime = this.computeTime.bind(this);
    this.state = {
      title: '',
      workout_date: '',
      time: '---',
      route_id: '',
      workout_time_hours: '0',
      workout_time_minutes: '0',
      errors: undefined
    }
  }

  componentDidMount(){
    this.props.requestAllRoutes();
  }

  handleInput(field){
    return (e) => this.setState({[field]: e.target.value})
  }

  computeTime(){
    if(this.state.workout_time_hours === '') {
      this.setState({time: `${this.state.workout_time_minutes} min`})
    } else {
      this.setState({time: `${this.state.workout_time_hours} hours ${this.state.workout_time_minutes} min`})
    }
  }

  handleTimeInput(field){
    return (e) => this.setState({[field]: e.target.value})
  }

  handleSelectChange(e){
    this.setState({"route_id": e.target.value})
  }

  handleSubmit(e){
    e.preventDefault();
    this.props.processForm(this.state).then(this.props.closeModal);
  }

  render(){
    if (!this.props.routes) return null;
    const dataListOptions = this.props.routes.map(
      (route) => <option
                    key={route.id}
                    value={route.id}>{`${route.title} ---- ${route.distance}mi`}
                 </option>
    )

    let errors;
    if (this.props.errors.length >= 1){
      errors = (
        <ul className="workout-form-errors">
          {this.props.errors.map((error, i) => (
            <li key={`error-${i}`}>
              {error}
            </li>
          ))}
        </ul>
      )
    }

    return(
      <React.Fragment>
        <div className="workout-form-container">

          <header>
            <div onClick={this.props.closeModal} className="close-x">x</div>
            <h1>Save</h1>

          </header>

          <form onSubmit={this.handleSubmit} className="workout-form">

            <section className="workout-input">

              <input
                type="text"
                onChange={this.handleInput('title')}
                placeholder="Title (required)"
                />
            </section>

            <section className="workout-input">

              <input
                type="date"
                onChange={this.handleInput('workout_date')}
                placeholder="Date"
                />
            </section>

            <section className="workout-time-input">

              <input
                type="number"
                onChange={this.handleTimeInput('workout_time_hours')}
                placeholder="Hours"
                value={this.state.workout_time_hours}
                />

                <input
                  type="number"
                  onChange={this.handleTimeInput('workout_time_minutes')}
                  placeholder="Minutes"
                  value={this.state.workout_time_minutes}
                  />
            </section>


            <select value={this.state.value} onChange={this.handleSelectChange}>
               <option value="" selected disabled hidden>Select Route</option>
              {dataListOptions}
            </select>





            <label className="private-checkbox">
              <input type="checkbox"/>
                 Private
              <i className="fa fa-lock" aria-hidden="true"></i>
            </label>

            <nav className="form-button-bar">

              <button
                className="form-cancel"
                onClick={this.props.closeModal}>Cancel</button>

              <input type="submit" value="Save" className="form-save"/>

            </nav>
            <div>{errors}</div>
          </form>

          </div>
      </React.Fragment>
    )
  }
}



export default WorkOutFormComponent;
