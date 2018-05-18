import React from 'react';
import { WeeklyTotalGraph, AnnualStatsTotal } from './weekly_total_graph'

class TrainingOverview extends React.Component{

  render() {

    return (
      <main className="stats-main-page">
          <h1>
            Training Calendar
          </h1>
          <h2>
            Year (2018)
          </h2>
          <header>
            <WeeklyTotalGraph/>
            <AnnualStatsTotal/>
          </header>
      </main>
    )
  }
}

export default TrainingOverview;
