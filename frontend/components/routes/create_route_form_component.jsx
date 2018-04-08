

import React from 'react';
import { Link } from 'react-router-dom';
import RouteMap from './route_map';

class CreateRouteFormComponent extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      user_id: 1,
      title: '',
      description: '',
      distance_unit: 'miles',
      polyline: null,
      path: null,
      duration: null,
      distance: null,
      elevation_gain: null,
    }
    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    // this.updateState = this.updateState.bind(this);
  }

  handleInput(field){
    return (e) => this.setState({[field]: e.target.value})
  }

  // updateState(){
  //   this.setState({
  //     user_id: this.state.user_id,
  //     title: this.state.title,
  //     description: this.state.description,
  //     distance_unit: this.state.distance_unit,
  //     polyline: this.props.routePath.polyline,
  //     path: this.props.routePath.path,
  //     duration: this.props.routePath.duration,
  //     distance: this.props.routePath.distance,
  //     elevation_gain: this.props.routePath.elevation
  //   }, () => console.log(this.state))
  // }

  handleSubmit(e){
    e.preventDefault();
    this.props.createRoute({
      user_id: this.state.user_id,
      title: this.state.title,
      description: this.state.description,
      distance_unit: this.state.distance_unit,
      polyline: this.props.routePath.polyline,
      path: JSON.stringify(this.props.routePath.path),
      duration: this.props.routePath.duration,
      distance: this.props.routePath.distance,
      elevation_gain: this.props.routePath.elevation
    })
    // .then(() => this.props.history.push("/routes"));
  }

  render(){

    return(
      <React.Fragment>
        <form onSubmit={this.handleSubmit}>
          <p>
            Enter a name and description for your route below.
            On the next page, you'll be able to see, edit, and
            share your route.
          </p>
          <label className="route-modal-labels">
            Title
          </label>
          <input
            type="text"
            id="route-modal-title"
            onChange={this.handleInput('title')}
            />

        <label className="route-modal-labels">Description</label>
          <textarea
            id="route-modal-description"
            onChange={this.handleInput('description')}
            />
          <input type="submit"/>
        </form>

      </React.Fragment>
    )
  }
}

export default CreateRouteFormComponent;
