import React from 'react';
import { Link } from 'react-router-dom';


class WorkOutFormComponent extends React.Component{
  constructor(props){
    super(props)
    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleSelectChange = this.handleSelectChange.bind(this)
    this.state = {
      title: '',
      workout_date: '',
      time: null,
      route_id: null,
    }
  }

  componentDidMount(){
    this.props.requestAllRoutes();
  }

  handleInput(field){
    return (e) => this.setState({[field]: e.target.value})
  }

  handleSelectChange(e){
    this.setState({"route_id": e.target.value})
  }

  handleSubmit(e){
    e.preventDefault();
    this.props.processForm(this.state)
  }

  render(){

    const dataListOptions = this.props.routes.map(
      (route) => <option
                    key={route.id}
                    value={route.id}>{route.title}
                 </option>
    )

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
                id="route-modal-title"
                onChange={this.handleInput('title')}
                placeholder="Title (required)"
                />
            </section>

            <section className="workout-input">

              <input
                type="date"
                id="route-modal-title"
                onChange={this.handleInput('workout_date')}
                placeholder="Date"
                />
            </section>

            <section className="workout-input">

              <input
                type="time"
                className="without"
                id="route-modal-title"
                onChange={this.handleInput('time')}
                placeholder="Time"
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

          </form>

          </div>
      </React.Fragment>
    )
  }
}



export default WorkOutFormComponent;
