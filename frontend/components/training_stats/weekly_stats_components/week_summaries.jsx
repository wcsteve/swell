import React from 'react';
import DateRange from './date_range'

class WeekSummaries extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    const {startSunday, duration, elevation, distance, selectedStat} = this.props
    if (!startSunday) {
      return null;
    }


    const stats = {
      duration: duration,
      elevation: `${Number(elevation).toFixed(0)} ft`,
      distance: `${Number(distance).toFixed(1)} mi`,
    }

    let subStat1 = `${stats.elevation}`;
    if (selectedStat === 'elevation') {
      subStat1 = `${stats.distance}`
    }
    let subStat2 = stats.duration;
    if (selectedStat === 'duration') {
      subStat2 = `${stats.distance}`
    }


    return (
        <React.Fragment>
          <DateRange startSunday={startSunday}/>
          <div className='sub-stat-container'>
            <span className='sub-stat'>{subStat1}</span>
            <span className='sub-stat'>{subStat2}</span>
          </div>
          <span className='main-week-stat'>{stats[selectedStat]}</span>
        </React.Fragment>
    )
  }
}

export default WeekSummaries;
