import React from "react";

class WorkoutFeedComponent extends React.Component{
  constructor(props){
    super(props);
    this.state = this.props.userWorkouts
  }


  componentDidMount(){
    this.props.requestAllWorkouts()
  }

  render(){

    return (
      <React.Fragment>
        <h1>WorkoutFeedComponent</h1>
      </React.Fragment>
    )
  }
  }

export default WorkoutFeedComponent;
