import React from 'react';
import { Link } from 'react-router-dom';

class RouteIndex extends React.Component{
  render(){
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

        <body className="route-body">

          <ul>
          </ul>

        </body>

      </main>

    )
  }
}

export default RouteIndex;
