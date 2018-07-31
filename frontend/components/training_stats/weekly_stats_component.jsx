import React from 'react';
import WeekStatItem from './weekly_stats_components/week_stat_item';
import TrainingHeader from './weekly_stats_components/training_header'
class WeeklyStats extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);

    this.state = {
      month: this.props.month,
      year: this.props.year,
      selectedStat: 'distance'
    };
  }

  componentDidMount() {
    this.props.requestWorkouts().then(() => this.setState({ loaded: true }));
  }

  handleChange(e) {
    this.setState({selectedStat : e.target.value})
  }

  render() {
    if (!this.state.loaded) {
      return null;
    }

    const numOfWeeks = () => {
      const firstOfMonth = new Date(this.state.year, this.state.month, 1);
      const lastOfMonth = new Date(this.state.year, this.state.month + 1, 0);

      const used = firstOfMonth.getDay() + lastOfMonth.getDate();

      return Math.ceil(used / 7);
    };

    const weekStatList = (() => {
      const listComponents = [];
      for (let i = 0; i < numOfWeeks(); i++) {
        listComponents.push(
          <WeekStatItem
            key={i}
            weekNumber={i}
            stats={this.props.selectedWorkouts}
            month={this.state.month}
            year={this.state.year}
            selectedStat={this.state.selectedStat}
            maxStats={this.props.maxStats}
          />
        );
      }

      return listComponents;
    })();

    return (
      <main className="stats-main-page">
        <h1 className='training-log-title'>Training Log</h1>
        <TrainingHeader
          selectedStat={this.state.selectedStat}
          statSelector={this.handleChange}
          />
        <ul>{weekStatList}</ul>
      </main>
    );
  }
}

export default WeeklyStats;
