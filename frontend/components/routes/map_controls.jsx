import React from 'react';

export const Control = (eventToHandle, buttonName) => (
    <div>
      <div className="map-button-bar">
        <div className="center" onClick={eventToHandle}>{buttonName}</div>
      </div>
    </div>
)
