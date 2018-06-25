import React from 'react';
import WeekSummaries from './week_summaries';
import BubbleChart from './bubble_chart';

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
    const startSunday = new Date(
      firstOfMonth.setDate(
        firstOfMonth.getDate() -
          firstOfMonth.getDay() +
          7 * this.props.weekNumber
      )
    );
    const endSunday = new Date(firstOfMonth.setDate(startSunday.getDate() + 7));

    const thisWeeksWorkouts = data.filter(workout => {
      let workoutDate = new Date(workout.workoutDate.split('-'));
      if (workoutDate >= startSunday && workoutDate < endSunday) {
        return workout;
      }
    });

    return [thisWeeksWorkouts, startSunday];
  }

  _processData() {
    const weekData = [[], [], [], [], [], [], []];
    // console.log(this.props.stats)
    const data = this.filterWeekData(
      this.props.stats,
      this.props.year,
      this.props.month
    );
    const statTotals = {
      elevation: 0,
      distance: 0,
      duration: 0
    };

    for (let i = 0; i < data[0].length; i++) {
      let workout = data[0][i];
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
      statTotals.duration = statTotals.duration += minutes;
    }

    this.setState({ weekData, statTotals, startSunday: data[1] }, () => 1 + 1);
  }

  render() {
    if (!this.state.weekData) {
      return null;
    }
    const bubbleCharts = (this.state.weekData.map( (singleDayData, idx) =>
      <BubbleChart
        key={idx}
        data={singleDayData}
        selectedStat={this.props.selectedStat}
        />
    ))

    return (
      <li className="week">
        <div className="week-summary">
          <WeekSummaries
            {...this.state.statTotals}
            selectedStat={this.props.selectedStat}
            startSunday={this.state.startSunday}
            />
        </div>
        <div className="week-breakdown">
          <ul className="bubble-list">
            {bubbleCharts}
          </ul>
        </div>
      </li>
    );
  }
}

export default WeekStatItem;
