import React from "react";

class WorkOutStatsWidget extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      lastWeekWorkouts: null
    }
  }


  componentDidMount(){
    this.props.requestAllWorkouts().then(() => this.setState({
      lastWeekWorkouts: this.props.lastWeekWorkouts,

    }))
  }

  render(){

    if (!this.props.lastWeekWorkouts) return null;
    let totalWeekStats;

    let singleDayStats;
    if (this.state.singleWorkout) {
      singleDayStats = (
        <h3>{this.state.singleWorkout.title}</h3>
      )
    }


    return (
      <React.Fragment>
        <header>
          <h1>WorkoutStatsWidget</h1>
        </header>
        <main>
          {totalWeekStats}
          {singleDayStats}
        </main>
        <footer></footer>
      </React.Fragment>
    )
  }
}

export default WorkOutStatsWidget;
