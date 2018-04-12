import React from 'react';
import { Link } from 'react-router-dom';
import RouteIndexItem from './route_index_item';

class RouteIndex extends React.Component{

  componentDidMount(){
    this.props.requestAllRoutes()
  }

  render(){
    const {requestAllWorkouts} = this.props
    const routes = (
        this.props.routes.map(singleRoute =>
          <RouteIndexItem
            route={singleRoute}
            delete={this.props.deleteRoute}
            key={singleRoute.id}
            request={requestAllWorkouts}
            />
        )
    )

    window.props = this.props
    return(
      <main className="route-main">

        <header className="route-header">

          <h1>My Routes</h1>

          <Link
            to="/routes/new"
            className="create-route-button">
            Create New Route
          </Link>

        </header>

        <section className="route-body">

          <ul className="route-list">
            {routes}
          </ul>

        </section>

      </main>

    )
  }
}

export default RouteIndex;
