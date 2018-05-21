import { Bar } from 'react-chartjs-2';
import React from 'react';

class MonthStatsBarChart extends React.Component {
  constructor(props) {
    super(props);

    this.parseState = this.parseStats.bind(this);
    this.parsedStats = Array(31).fill(0)
    this.state = {
      stats: [],
      statTotal: 0,
    };
  }

  componentDidMount() {
    this.parseStats(this.props);
    console.log('**', this.props.height)
  }

  componentWillReceiveProps(nextProps) {
    this.parseStats(nextProps);
    console.log('**', this.props.height)
  }

  parseStats(props) {
    const stats = props.stats;
    // console.log('input', this.props)
    let parsedStats = Array(31).fill(0);
    let statTotal = 0
    for (let i = 0; i < stats.length; i++) {
      let singleStat = stats[i];
      let statYear = parseInt(singleStat.workoutDate.split('-')[0])
      if (props.year !== statYear) {
        continue;
      }
      let metric;
      if (props.statChoice === 'activities'){
        metric = 1;
      } else if (props.statChoice === 'time') {
        metric = singleStat[props.statChoice] / 60
      } else {
        metric = singleStat[props.statChoice]
      }

      let day = parseInt(singleStat.workoutDate.split('-')[2])
      parsedStats[day - 1] += metric;
      statTotal += metric;
    }
    // console.log('output', parsedStats)

    this.setState({ stats: parsedStats, statTotal: statTotal.toFixed() });
  }

  render() {
    const months = [
      'JAN',
      'FEB',
      'MAR',
      'APR',
      'MAY',
      'JUN',
      'JUL',
      'AUG',
      'SEPT',
      'OCT',
      'NOV',
      'DEC'
    ];

    const chartData = {
      labels: Array(this.state.stats.length).fill(''),
      datasets: [
        {
          label: '',
          data: this.state.stats,
          backgroundColor: 'rgba(45, 45, 50)',
        }
      ]
    };

    const chartOptions = {
      maintainAspectRatio: false,
      responsive: true,
      tooltips: {
        enabled: true
      },
      legend: {
        display: false,
      },
      scales: {
        yAxes: [
          {
            display: false,
            ticks: {
              min: 0,
              max: this.props.height,
            }
          }
        ],
        xAxes: [
          {
            display: false,
            barPercentage: 0.5,
          },
        ]
      }
    };

    const statUnitOptions = {
      distance: 'MILES',
      time: 'HOURS',
      elevationGain: 'FT. CLIMBED',
      activities: 'ACTIVITIES'
    }
    let statTotal;
    if (this.state.statTotal > 0) {
      statTotal = (
        <div className='month-stat-total'>
          <span className='month-stat-metric'>
            {this.state.statTotal}
          </span>
          <div className='month-stat-unit'>
            {statUnitOptions[this.props.statChoice]}
          </div>
        </div>
      )
    }

    return (
      <li className="monthly-chart">
        <h3>{months[this.props.monthNumber]}</h3>

        {statTotal}

        <div className="react-month-chart">
          <Bar
            data={chartData}
            options={chartOptions}
            />
        </div>
      </li>
    );
  }
}

export default MonthStatsBarChart;
// <BarChart data={chartData} options={chartOptions} />
// <BarChart data={chartData} options={chartOptions}/>
