import React from 'react';
import WeekStatItem from './week_stat_item';

class WeeklyStats extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      month: this.props.month,
      year: this.props.year
    };
  }

  componentDidMount() {
    this.props.requestWorkouts();
  }

  render() {
    // console.log(this.props.selectedWorkouts)

    const numOfWeeks = () => {
      const firstOfMonth = new Date(this.state.year, this.state.month, 1);
      const lastOfMonth = new Date(this.state.year, this.state.month + 1, 0);

      const used = firstOfMonth.getDay() + lastOfMonth.getDate();

      return Math.ceil(used / 7);
    };

    const weekStatList = ( () => {
      const listComponents = [];
      console.log('*****', numOfWeeks)
      for (let i = 0; i < numOfWeeks(); i++) {
        listComponents.push(
          <WeekStatItem
            key={i}
            weekNumber={i}
            stats={this.props.selectedWorkouts}
            />
        )
      }

      return listComponents;
    })()

    console.log(weekStatList)
    return (
      <div>
        <h1>hello</h1>

        <ul>
          {weekStatList}
        </ul>
      </div>
    );
  }
}

export default WeeklyStats;
