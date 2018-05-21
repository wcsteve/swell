import React from "react";

class WorkOutStatsWidget extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      lastWeekWorkouts: null
    }
  }


  componentDidMount(){
    this.props.fetchWeekStats()
  }

  render(){
    if (!this.props.lastWeekWorkouts) return null;
    const { lastWeekWorkouts } = this.props
    console.log(lastWeekWorkouts)
    const distanceTotal = lastWeekWorkouts.reduce((acc, distance) => {
      return acc + distance
    }, 0);

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
          <h2>THIS WEEK</h2>
          {distanceTotal.toFixed(1)} mi
        </main>
        <footer></footer>
      </React.Fragment>
    )
  }
}

export default WorkOutStatsWidget;
