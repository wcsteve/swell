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
    console.log('props', this.props)
    const { lastWeekWorkouts,
            lastWeekTotals,
            annualTotalDistance } = this.props;

    const barHeight = Math.max.apply(null, lastWeekWorkouts) * 1.5;
    const hour = (lastWeekTotals.time / 60).toFixed()
    const min = lastWeekTotals.time % 60


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
          <div className="last-week-total">{(lastWeekTotals.distance).toFixed(1)} mi</div>
        </header>

        <main>
          <div className="react-week-chart">
            <Bar data={chartData} options={chartOptions} />
          </div>
        </main>

        <footer>
          <ul>
            <li id='left-stat'>{hour}h {min}m</li>
            <li>{(lastWeekTotals.elevationGain).toFixed()} ft</li>
          </ul>
        </footer>
      </React.Fragment>
    );
  }
}

export default WorkOutStatsWidget;
