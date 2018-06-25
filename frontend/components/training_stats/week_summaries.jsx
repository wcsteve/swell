import React from 'react';

class WeekSummaries extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      // duration: `${Math.floor(this.props.duration / 60)}h ${this.props.duration % 60}m`,
      // elevation: this.props.elevation.toFixed(2),
      // distance: this.props.distance.toFixed(2),
      selectedStat: this.props.selectedStat,
    }
  }

  render() {
    if (!this.props.startSunday) {
      return null;
    }

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

    const month = months[(this.props.startSunday).getMonth()]
    const day = (this.props.startSunday).getDate()

    const stats = {
      duration: `${Math.floor((this.props.duration) / 60)}h ${(this.props.duration) % 60}m`,
      elevation: Number(this.props.elevation).toFixed(1),
      distance: Number(this.props.distance).toFixed(0),
    }

    let subStat1 = `${stats.elevation} ft`;
    if (this.props.selectedStat === 'elevation') {
      subStat1 = `${stats.distance} mi`
    }
    let subStat2 = stats.duration;
    if (this.props.selectedStat === 'duration') {
      subStat2 = `${stats.distance} mi`
    }


    return (
        <React.Fragment>
          <h4>Week of {month} {day}</h4>
          <div>
            <span>{subStat1}</span>
            <span>     </span>
            <span>{subStat2}</span>
          </div>
          <span>{stats[this.props.selectedStat]}</span>
        </React.Fragment>
    )
  }
}

export default WeekSummaries;
