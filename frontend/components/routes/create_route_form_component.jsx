import React from 'react';
import { Link } from 'react-router-dom';
import RouteMap from './route_map';

class CreateRouteFormComponent extends React.Component{
  constructor(props){
    super(props)
    this.state = this.props.currentUser
  }

  render(){


    return(
      <React.Fragment>
        <RouteMap />
      </React.Fragment>
    )
  }
}

export default CreateRouteFormComponent;
