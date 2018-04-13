import React from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import {requestSingleWorkout, updateWorkout} from '../../actions/workout_actions';
import { connect } from 'react-redux';
import { requestAllRoutes } from '../../actions/route_actions';
import { openModal, closeModal } from '../../actions/modal_actions';
import { receiveSingleUiStat } from '../../actions/ui_stat_actions';
import { selectUserRoutes } from "../../selectors/routes_selector";



const mapStateToProps = (state, ownProps) => {
  const defaultPost = { title: '', time: '', workout_date: '', route_id: null};
  const formType = 'Update Workout';
  // const routes = state.entities.routes;
  const workoutId = state.ui.workout[0]
  const workout = state.entities.workouts[workoutId]
  const routes = selectUserRoutes(state)
  const errors = state.errors.workout
  return { workout, formType, routes, workoutId, errors};
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchWorkout: id => dispatch(requestSingleWorkout(id)),
    requestAllRoutes: () => dispatch(requestAllRoutes()),
    processForm: (workout) => dispatch(updateWorkout(workout)),
    closeModal: () => dispatch(closeModal()),
    requestWorkoutId: (id) => dispatch(receiveSingleUiStat(id))
  };
};



class EditWorkoutFormComponent extends React.Component{
  constructor(props){
    super(props)
    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleSelectChange = this.handleSelectChange.bind(this);
    this.handleTimeInput = this.handleTimeInput.bind(this);
    this.parseTime = this.parseTime.bind(this);
    this.state = {
      title: this.props.workout.title,
      workout_date: this.props.workout.workoutDate,
      time: this.props.workout.time,
      route_id: this.props.workout.routeId,
      workout_time_hours: this.props.workout.workoutTimeHours,
      workout_time_minutes: this.props.workout.workoutTimeMinutes,
      id: this.props.workout.id
    }
  }

  componentDidMount(){
    this.props.requestAllRoutes();
    this.parseTime()
  }

  parseTime(){
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
    this.props.processForm(this.state).then(() => this.props.closeModal());
  }

  render(){
    if (!this.props.routes) return null;
    const dataListOptions = this.props.routes.map(
      (route) => <option
                    key={route.id}
                    value={route.id}>{route.title}
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
                value={this.state.title}
                />
            </section>

            <section className="workout-input">

              <input
                type="date"
                onChange={this.handleInput('workout_date')}
                placeholder="Date"
                value={this.state.workout_date}
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



export default withRouter(connect(mapStateToProps, mapDispatchToProps)(EditWorkoutFormComponent));
