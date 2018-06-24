import React from 'react';

class WeekStatItem extends React.Component{
  render(){
    return (
      <li>{this.props.weekNumber}</li>
    )
  }
}

export default WeekStatItem;
