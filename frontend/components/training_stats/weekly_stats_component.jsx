import React from 'react';

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
    console.log(this.state.month);
    console.log(this.state.year);
    const numOfWeeks = () => {
      const firstOfMonth = new Date(this.state.year, this.state.year, 1);
      const lastOfMonth = new Date(this.state.year, this.state.year + 1, 0);

      const used = firstOfMonth.getDay() + lastOfMonth.getDate();

      return Math.ceil(used / 7);
    };

    return (
      <div>
        <h1>hello</h1>
      </div>
    );
  }
}

export default WeeklyStats;
