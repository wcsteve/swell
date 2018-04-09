import React from "react";

export const MapBottomPanel = ({distance, elevationGain, time}) => {

  return (
    <div className="map-bottom-panel">
      <ul>
        <li>
          <strong className="panel-title">Run</strong>
          <label className="panel-label">Route Type</label>
        </li>

        <li>
          <strong className="panel-title">{distance}mi</strong>
          <label className="panel-label">Distance</label>
        </li>

        <li>
          <strong className="panel-title">{elevationGain}ft</strong>
          <label className="panel-label">Elevation Gain</label>
        </li>

        <li>
          <strong className="panel-title">{time}</strong>
          <label className="panel-label">Est. Moving Time</label>
        </li>
      </ul>
    </div>
  )
};
