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
// 
// import React from 'react';
// import WeekSummaries from './week_summaries';
// import {XYPlot, XAxis, YAxis, HorizontalGridLines, LineSeries} from 'react-vis';
//
// class WeekStatItem extends React.Component {
//   constructor(props) {
//     super(props);
//     this._processData = this._processData.bind(this);
//     this.filterWeekData = this.filterWeekData.bind(this);
//     this._selectedStat = this._selectedStat.bind(this);
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
//     const weekData = [{x: 0, y: 0}, {x: 1, y: 0}, {x: 2, y: 0},
//       {x: 3, y: 0}, {x: 4, y: 0}, {x: 5, y: 0}, {x: 6, y: 0}];
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
//       let elevationGain = parseInt(workout.route.elevation_gain);
//       let distance = workout.route.distance;
//       let minutes =
//         parseInt(workout.workoutTimeMinutes) +
//         parseInt(workout.workoutTimeHours) * 60;
//
//       weekData[dayOfWeek]['y'] += this._selectedStat(elevationGain, distance, minutes, 'distance')
//       statTotals.elevation = statTotals.elevation += elevationGain;
//       statTotals.distance = statTotals.distance += distance;
//       statTotals.duration = statTotals.duration += minutes;
//     }
//     console.log(weekData)
//     this.setState({ weekData, statTotals, startSunday: data[1] }, () => 1 + 1);
//   }
//
//   _selectedStat(elevationGain, distance, minutes, selectedStat){
//     if (selectedStat === 'distance') {
//       return distance;
//     }else if (selectedStat === 'elevation') {
//       return elevationGain;
//     } else {
//       return minutes;
//     }
//   }
//
//   render() {
//     if (!this.state.weekData) {
//       return null;
//     }
//
//     console.log(this.state.weekData)
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
//           <XYPlot
//   width={300}
//   height={300}>
//   <HorizontalGridLines />
//   <LineSeries
//     color="red"
//     data={[
//       {x: 1, y: 10},
//       {x: 2, y: 5},
//       {x: 3, y: 15}
//     ]}/>
//   <XAxis title="X" />
//   <YAxis />
// </XYPlot>
//
//         </div>
//       </li>
//     );
//   }
// }
//
// export default WeekStatItem;
//
// // <ul className="bubble-list">
// // </ul>
// // const bubbleCharts = (this.state.weekData.map( (singleDayData, idx) =>
// //   <BubbleChart
// //     key={idx}
// //     data={singleDayData}
// //     selectedStat={this.props.selectedStat}
// //     />
// // ))
