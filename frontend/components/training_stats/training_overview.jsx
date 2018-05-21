import React from 'react';
import AnnualStatsTotal from './weekly_total_graph'
import MonthStatsBarChart from './monthly_stat_item'

class TrainingOverview extends React.Component{
  constructor(props){
    super(props);
    this.setChartStat = this.setChartStat.bind(this);

    this.state = {
      selectedStat: 'distance'
    }
  }
  componentDidMount(){
    this.props.getStats();
  }

  setChartStat(unitChoice){
    console.log(unitChoice)
    this.setState({selectedStat: unitChoice})
  }

  render() {
    if(Object.keys(this.props.stats).length === 0) return null
    console.log(this.props.barHeight)

    const monthStats = (
      this.props.monthlyStats.map((monthStat, index) => {
        return (
          <MonthStatsBarChart
          stats={monthStat}
          monthNumber={index}
          key={index}
          height={this.props.maxStats[this.state.selectedStat]}
          statChoice={this.state.selectedStat}
          />
        )
      })
    )

    return (
      <main className="stats-main-page">
          <h1>
            Training Calendar
          </h1>
          <h2>
            Year (2018)
          </h2>
          <header className='month-stats-header'>
            <div></div>
            <AnnualStatsTotal
              distanceTotal={this.props.distanceTotal}
              durationMinTotal={this.props.durationMinTotal}
              elevationGainTotal={this.props.elevationGainTotal}
              activities={this.props.activities}
              setMetric={this.setChartStat}
              />
          </header>

          <section>
            <ul className="month-list">
              {monthStats}
            </ul>
          </section>
      </main>
    )
  }
}

export default TrainingOverview;
