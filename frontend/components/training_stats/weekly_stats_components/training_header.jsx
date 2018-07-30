import React from 'react'

const TrainingHeader = (props) => {
  return (
    <div className="week-training-header">
      <select className='stat-selector' onChange={props.statSelector}>
        <option value="distance">Distance</option>
        <option value="elevation">Elevation</option>
        <option value="duration">Time</option>
      </select>
    </div>
  )
}


export default TrainingHeader;
