import React from 'react';
import { Bar } from 'react-chartjs-2';
import merge from 'lodash';
import { defaults } from 'react-chartjs-2';

class WorkOutStatsWidget extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lastWeekWorkouts: null
    };
  }

  componentDidMount() {
    this.props.fetchWeekStats();
  }

  render() {
    if (!this.props.lastWeekWorkouts) return null;
    const { lastWeekWorkouts } = this.props;
    const barHeight = Math.max.apply(null, lastWeekWorkouts) * 1.5;
    const distanceTotal = lastWeekWorkouts.reduce((acc, distance) => {
      return acc + distance;
    }, 0);

    let singleDayStats;
    if (this.state.singleWorkout) {
      singleDayStats = <h3>{this.state.singleWorkout.title}</h3>;
    }

    const chartData = {
      labels: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
      datasets: [
        {
          data: lastWeekWorkouts,
          backgroundColor: 'rgb(143, 213, 190)'
        }
      ]
    };

    const chartOptions = {
      maintainAspectRatio: false,
      responsive: true,
      tooltips: {
        enabled: false
      },
      legend: {
        display: false
      },
      scales: {
        yAxes: [
          {
            display: false,
            ticks: {
              min: 0,
              max: barHeight
            }
          }
        ],
        xAxes: [
          {
            display: true,
            // barPercentage: 0.54,
            // categoryPercentage: 0.4,
            gridLines: {
              display: false,
              lineWidth: 0,
              drawBorder: false
            }
            // display: false,
          }
        ]
      }
    };

    return (
      <React.Fragment>
        <header className="workout-stats-widget-header">
          <h4>THIS WEEK</h4>
          <div className="last-week-total">{distanceTotal.toFixed(1)} mi</div>
        </header>

        <main>
          <div className="react-week-chart">
            <Bar data={chartData} options={chartOptions} />
          </div>
        </main>

        <footer>
          <ul>
            <li id='left-stat'>23h 0m</li>
            <li>62 ft</li>
          </ul>
        </footer>
      </React.Fragment>
    );
  }
}

export default WorkOutStatsWidget;
