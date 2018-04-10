import React from "react";

class WorkOutStatsWidget extends React.Component{
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
        <h1>WorkoutStatsWidget</h1>
      </React.Fragment>
    )
  }
}

export default WorkOutStatsWidget;
