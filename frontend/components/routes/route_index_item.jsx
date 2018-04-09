import React from 'react';
import SmallMap from './small_map'

export default class RouteIndexItem extends React.Component {
  constructor(props){
    super(props)
    this.route = this.props.route
  }

  render(){

    return (
      <li className="route-list-item">
        <SmallMap route={this.route}/>
        <div>Small Map</div>
        <section className="route-meta-data">
          <h3>{this.route.title}</h3>
          <ul className="route-stat-list">
            <li>

            </li>
          </ul>
        </section>
      </li>
    )
  }
}
