import React from 'react';
import { Link } from 'react-router-dom';

class RouteIndex extends React.Component{
  render(){
    return(
      <React.Fragment>
        <h1>Routes will go here</h1>
        <br />
        <Link to="/routes/new">Create Route</Link>
      </React.Fragment>
    )
  }
}

export default RouteIndex;
