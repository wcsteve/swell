

import React from 'react';
import { Link } from 'react-router-dom';
import RouteMap from './route_map';

class CreateRouteFormComponent extends React.Component{
  constructor(props){
    super(props)
    this.path = props.path
    this.createRoute = this.props.createRoute
    this.state = {
      user_id: this.props.currentUser.id,
      title: '',
      description: '',
      distance_unit: 'miles',
      // distance: ,
      // duration: ,
      // elevation_gain: ,
      // polyline: ,
    }
    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInput(field){
    return (e) => this.setState({[field]: e.target.value})
  }

  handleSubmit(e){
    e.preventDefault();
    let newPolyline =

    this.setState({
      polyline:
        Polyline()
    })
    this.props.createRoute(this.state)
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
