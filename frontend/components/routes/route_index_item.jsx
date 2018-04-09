import React from 'react';

export default class RouteIndexItem extends React.Component {
  constructor(props){
    super(props)
    this.route = this.props.route
  }

  render(){

    return (
      <li className="route-list-item">
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
