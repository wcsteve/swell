import React from 'react';
import WeekSummaries from './week_summaries';
import {
  XYPlot,
  XAxis,
  YAxis,
  HorizontalGridLines,
  LineSeries,
  LineMarkSeries
} from 'react-vis';

class WeekStatItem extends React.Component {
  constructor(props) {
    super(props);
    this._processData = this._processData.bind(this);
    this.filterWeekData = this.filterWeekData.bind(this);
    this._selectedStat = this._selectedStat.bind(this);
    this.state = {
      weekData: ''
    };
  }

  componentDidMount() {
    this._processData();
  }

  componentDidUpdate(prevProps) {
    if (this.props.selectedStat !== prevProps.selectedStat) {
      this._processData();
    }
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
    const weekData = [
      { x: 0, y: 0 },
      { x: 1, y: 0 },
      { x: 2, y: 0 },
      { x: 3, y: 0 },
      { x: 4, y: 0 },
      { x: 5, y: 0 },
      { x: 6, y: 0 }
    ];

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
      let elevationGain = parseInt(workout.route.elevation_gain);
      let distance = workout.route.distance;
      let minutes = 0;
      if (workout.workoutTimeMinutes) {
        minutes += parseInt(workout.workoutTimeMinutes);
      }
      if (workout.workoutTimeHours) {
        parseInt(workout.workoutTimeHours) * 60;
      }

      weekData[dayOfWeek]['y'] += this._selectedStat(
        elevationGain,
        distance,
        minutes,
        this.props.selectedStat
      );
      statTotals.elevation = statTotals.elevation += elevationGain;
      statTotals.distance = statTotals.distance += distance;
      statTotals.duration = statTotals.duration += minutes;
    }

    if (statTotals.duration === 0) {
      statTotals.duration = '--:--';
    } else {
      statTotals.duration = `${Math.floor(
        statTotals.duration / 60
      )}h ${statTotals.duration % 60}m`;
    }
    const maxStat = weekData.reduce((acc, day) => {
      if (day.y > acc) {
        return day.y
      } else {
        return acc
      }
    }, 0)

    this.setState({ weekData, statTotals, maxStat, startSunday: data[1] }, () => 1 + 1);
  }

  _selectedStat(elevationGain, distance, minutes, selectedStat) {
    if (selectedStat === 'distance') {
      return distance;
    } else if (selectedStat === 'elevation') {
      return elevationGain;
    } else if (selectedStat === 'duration') {
      return minutes / 60;
    }
  }

  render() {
    if (!this.state.weekData) {
      return null;
    }
    // const chartHeight = this.state.maxStat;
    const WORDS = {
      0: 'Sun',
      1: 'Mon',
      2: 'Tue',
      3: 'Wed',
      4: 'Thu',
      5: 'Fri',
      6: 'Sat',
    }

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
          <XYPlot width={630} height={130} yDomain={[0, (this.state.maxStat + 5)]} yBaseValue={0}>
            <HorizontalGridLines />
            <LineMarkSeries
              data={this.state.weekData}
              lineStyle={{ stroke: '#A4BE9C' }}
              markStyle={{ stroke: '#3788CB', fill: '#3788CB', opacity: 0.75 }}
            />
          <YAxis />
          <XAxis tickTotal={7}
              tickFormat={v => WORDS[v]}
              />
          </XYPlot>
        </div>
      </li>
    );
  }
}

export default WeekStatItem;

// <ul className="bubble-list">
// </ul>
// const bubbleCharts = (this.state.weekData.map( (singleDayData, idx) =>
//   <BubbleChart
//     key={idx}
//     data={singleDayData}
//     selectedStat={this.props.selectedStat}
//     />
// ))
// import React from 'react';
// import WeekSummaries from './week_summaries';
// import BubbleChart from './bubble_chart';
//
// class WeekStatItem extends React.Component {
//   constructor(props) {
//     super(props);
//     this._processData = this._processData.bind(this);
//     this.filterWeekData = this.filterWeekData.bind(this);
//     this.state = {
//       weekData: ''
//     };
//   }
//
//   componentDidMount() {
//     this._processData();
//   }
//
//   filterWeekData(data, year, month) {
//     const firstOfMonth = new Date(year, month, 1);
//     const startSunday = new Date(
//       firstOfMonth.setDate(
//         firstOfMonth.getDate() -
//           firstOfMonth.getDay() +
//           7 * this.props.weekNumber
//       )
//     );
//     const endSunday = new Date(firstOfMonth.setDate(startSunday.getDate() + 7));
//
//     const thisWeeksWorkouts = data.filter(workout => {
//       let workoutDate = new Date(workout.workoutDate.split('-'));
//       if (workoutDate >= startSunday && workoutDate < endSunday) {
//         return workout;
//       }
//     });
//
//     return [thisWeeksWorkouts, startSunday];
//   }
//
//   _processData() {
//     const weekData = [[], [], [], [], [], [], []];
//     // console.log(this.props.stats)
//     const data = this.filterWeekData(
//       this.props.stats,
//       this.props.year,
//       this.props.month
//     );
//     const statTotals = {
//       elevation: 0,
//       distance: 0,
//       duration: 0
//     };
//
//     for (let i = 0; i < data[0].length; i++) {
//       let workout = data[0][i];
//       let date = workout.workoutDate;
//       let dayOfWeek = new Date(date.split('-')).getDay();
//       weekData[dayOfWeek].push(workout);
//       let elevationGain = parseInt(workout.route.elevation_gain);
//       let distance = workout.route.distance;
//       let minutes =
//         parseInt(workout.workoutTimeMinutes) +
//         parseInt(workout.workoutTimeHours) * 60;
//
//       statTotals.elevation = statTotals.elevation += elevationGain;
//       statTotals.distance = statTotals.distance += distance;
//       statTotals.duration = statTotals.duration += minutes;
//     }
//
//     this.setState({ weekData, statTotals, startSunday: data[1] }, () => 1 + 1);
//   }
//
//   render() {
//     if (!this.state.weekData) {
//       return null;
//     }
//     const bubbleCharts = (this.state.weekData.map( (singleDayData, idx) =>
//       <BubbleChart
//         key={idx}
//         data={singleDayData}
//         selectedStat={this.props.selectedStat}
//         />
//     ))
//
//     return (
//       <li className="week">
//         <div className="week-summary">
//           <WeekSummaries
//             {...this.state.statTotals}
//             selectedStat={this.props.selectedStat}
//             startSunday={this.state.startSunday}
//             />
//         </div>
//         <div className="week-breakdown">
//           <ul className="bubble-list">
//             {bubbleCharts}
//           </ul>
//         </div>
//       </li>
//     );
//   }
// }

// export default WeekStatItem;
