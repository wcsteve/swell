import React from 'react';

class WeekStatItem extends React.Component {
  constructor(props) {
    super(props);
    this._processData = this._processData.bind(this);
    this.filterWeekData = this.filterWeekData.bind(this);
    this.state = {
      weekData: ''
    };
  }

  componentDidMount() {
    this._processData();
  }

  filterWeekData(data, year, month) {
    const firstOfMonth = new Date(year, month, 1);
    const startSunday = new Date(firstOfMonth.setDate(firstOfMonth.getDate() - firstOfMonth.getDay() + (7 * this.props.weekNumber)));
    const endSunday = new Date(firstOfMonth.setDate(startSunday.getDate() + 7 ));


    const thisWeeksWorkouts = data.filter((workout) => {
      let workoutDate = new Date(workout.workoutDate.split('-'));
      if ((workoutDate >= startSunday) && (workoutDate < endSunday)) {
        return workout;
      }
    });
    console.log(thisWeeksWorkouts)
    return thisWeeksWorkouts;
  }

  _processData() {
    const weekData = [[], [], [], [], [], [], []];
    // console.log(this.props.stats)
    const data = this.filterWeekData(this.props.stats, this.props.year, this.props.month);
    const statTotals = {
      elevation: 0,
      distance: 0,
      minutes: 0
    };

    for (let i = 0; i < data.length; i++) {
      let workout = data[i];
      let date = workout.workoutDate;
      let dayOfWeek = new Date(date.split('-')).getDay();
      weekData[dayOfWeek].push(workout);
      let elevationGain = parseInt(workout.route.elevation_gain);
      let distance = workout.route.distance;
      let minutes =
        parseInt(workout.workoutTimeMinutes) +
        parseInt(workout.workoutTimeHours) * 60;

      statTotals.elevation = statTotals.elevation += elevationGain;
      statTotals.distance = statTotals.distance += distance;
      statTotals.minutes = statTotals.minutes += minutes;
    }

    console.log(statTotals)
    this.setState({ weekData, statTotals })
  }


  render() {
    // if (!this.props.weekData) {
    //   return null;
    // }

    return (
      <li className="week">
        <div className="week-summary" />
        <div className="week-breakdown" />
      </li>
    );
  }
}

export default WeekStatItem;
