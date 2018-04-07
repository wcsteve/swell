import React from 'react';
import { Link } from 'react-router-dom';
import RouteMap from './map';

class CreateRouteFormComponent extends React.Component{
  constructor(props){
    super(props)
    this.state = this.props.currentUser
  }

  render(){


    return(
      <React.Fragment>
        <h1>{this.state.username}</h1>
        <br />
        <RouteMap />
      </React.Fragment>
    )
  }
}

export default CreateRouteFormComponent;
