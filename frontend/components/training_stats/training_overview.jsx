import React from 'react';
import AnnualStatsTotal from './weekly_total_graph'
import MonthStatsBarChart from './monthly_stat_item'

class TrainingOverview extends React.Component{
  constructor(props){
    super(props);
    this.setChartStat = this.setChartStat.bind(this);
    this.changeYear = this.changeYear.bind(this);
    this.calculateAnnualStats = this.calculateAnnualStats.bind(this);
    this.state = {
      selectedStat: 'distance',
      statsYear: 2018,
    }
  }
  componentDidMount(){
    this.props.getStats();
  }

  calculateAnnualStats(newYear){
    const stats = this.props.stats;
    const statTotals = {
      distance: 0,
      duration: 0,
      elevation: 0,
      activities: 0,
    }

    for (let date in stats) {
      let statYear = parseInt(date.split('-')[0])
      if (newYear !== statYear) {
        continue;
      }

      stats[date].forEach((stat) => {
        statTotals.distance += stat.distance;
        statTotals.duration += stat.time / 60;
        statTotals.elevation += stat.elevationGain;
        statTotals.activities += 1
      });
    }

    return statTotals;
  }

  setChartStat(unitChoice){
    this.setState({selectedStat: unitChoice})
  }

  changeYear(num){
    const newYear = this.state.statsYear + num;
    const newStatTotal = this.calculateAnnualStats(newYear);
    console.log('here', newStatTotal)
    this.setState({
      statsYear: newYear,
      distanceTotal: (newStatTotal.distance).toString(),
      durationMinTotal: (newStatTotal.duration).toString(),
      elevationGainTotal: (newStatTotal.elevation).toString(),
      activities: (newStatTotal.activities).toString(),
     });
  }

  render() {
    console.log(this.state.distanceTotal)
    const  distanceTotal = this.state.distanceTotal || this.props.distanceTotal
    const  durationMinTotal = this.state.durationMinTotal || this.props.durationMinTotal
    const  elevationGainTotal = this.state.elevationGainTotal || this.props.elevationGainTotal
    const  activities = this.state.activities || this.props.activities

    if(Object.keys(this.props.stats).length === 0) return null

    const monthStats = (
      this.props.monthlyStats.map((monthStat, index) => {
        return (
          <MonthStatsBarChart
          stats={monthStat}
          monthNumber={index}
          key={index}
          height={this.props.maxStats[this.state.selectedStat]}
          statChoice={this.state.selectedStat}
          year={this.state.statsYear}
          />
        )
      })
    )

    return (
      <main className="stats-main-page">
          <header className='month-stats-header'>
            <h1>
              Training Calendar
            </h1>
            <div className='month-year-stats-heading'>
              <div className='stats-year-select'>
                <i
                  className="fas fa-caret-left"
                  aria-hidden="true"
                  onClick={() => this.changeYear(-1)}></i>
                <h2>
                  {this.state.statsYear}
                </h2>
                <i
                  className="fas fa-caret-right"
                  aria-hidden="true"
                  onClick={() => this.changeYear(1)}></i>
              </div>

              <AnnualStatsTotal
                distanceTotal={distanceTotal}
                durationMinTotal={durationMinTotal}
                elevationGainTotal={elevationGainTotal}
                activities={activities}
                setMetric={this.setChartStat}
                />

            </div>
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
