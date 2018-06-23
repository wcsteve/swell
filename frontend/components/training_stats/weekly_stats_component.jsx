import React from 'react';

class WeeklyStats extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount() {
    this.props.requestWorkouts()
  }

  render(){
    console.log(this.props.match)

    return (
      <div>
        <h1>hello</h1>
      </div>
    )
  }
}

export default WeeklyStats;
