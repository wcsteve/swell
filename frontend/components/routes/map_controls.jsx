import React from 'react';

export const Control = (eventToHandle, buttonName) => (
    <React.Fragment>

        <div className="map-button" onClick={eventToHandle}>{buttonName}</div>

    </React.Fragment>
)

export const FormControl = ({ eventToHandle, buttonName }) => (
    <React.Fragment>

        <div onClick={eventToHandle}>{buttonName}</div>

    </React.Fragment>
)
