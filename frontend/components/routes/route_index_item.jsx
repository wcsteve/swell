import React from 'react';
import SmallMap from './small_map'

export default class RouteIndexItem extends React.Component {
  constructor(props){
    super(props)
    this.route = this.props.route;
  }

  render(){

    const routeDate = new Date(this.route.createdAt);
    const dateParsed = routeDate.toDateString();


    return (
      <li className="route-list-item">

        <div className="route-small-map">
          <SmallMap route={this.route}/>
        </div>

        <section className="route-meta-data">

          <h3>{this.route.title}</h3>

          <ul className="route-stat-list">

            <li>
              <strong>{(this.route.distance / 1000).toFixed(2)}
                <abbr>mi</abbr>
              </strong>
              <label>Distance</label>
            </li>

            <li>
              <strong>{parseInt(this.route.elevationGain)}
                <abbr>ft</abbr>
              </strong>
              <label>Elevation Gain</label>
            </li>

          </ul>

          <div className="route-time-data">
            <span>Est Moving Time </span>
          </div>

        </section>

        <footer className="route-timestamp-footer">
          {dateParsed}
        </footer>
      </li>
    )
  }
}
