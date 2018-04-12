import React from "react";
import { Link } from 'react-router-dom'

class WorkoutFeedItem extends React.Component{
  constructor(props){
    super(props)
    debugger

  }


  render(){


    let distance, elevation, duration;
    if (this.props.workout.route){
      elevation = this.props.workout.route.elevation_gain
      duration = this.props.workout.route.duration
      distance = this.props.workout.route.distance
    }

    return (

      <React.Fragment>
        <li className="card">


          <header className="item-feed-header">

            <img className="avatar" src="https://raw.githubusercontent.com/wcsteve/swell/master/app/assets/images/default_profile_icon.jpg"></img>

            <section className="feed-workout-title">
              <Link to={`/users`}className="entry-username">{this.props.username}</Link>
              <time className="feed-time">{this.props.workout.workoutDate}</time>
            </section>

          </header>




          <main className="entry-body">
            <div className="entry-icon"></div>
            <div className="workout-main-body">
              <h3 className="title-text">{this.props.workout.title}</h3>

              <ul className="stat-ul">
                <li>
                  <span>Moving Time</span>
                  <b>{duration}</b>
                </li>

                <li className="middle-stat">
                  <span>Distance</span>
                  <b>{distance} mi</b>
                </li>

                <li>
                  <span>Elevation Gain</span>
                  <b>{elevation} ft</b>
                </li>


              </ul>
            </div>
          </main>

          <footer className="feed-item-footer">
            <button onClick={()=> this.props.delete(this.props.workout.id)}>Delete</button>
          </footer>




        </li>
      </React.Fragment>
    )
  }
  }

export default WorkoutFeedItem;

  // <a className="entry-username">{this.props.username}</a>
