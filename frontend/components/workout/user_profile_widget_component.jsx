import React from "react";
import { Link } from 'react-router-dom'


class UserProfileWidget extends React.Component{
  constructor(props){
    super(props)
    this.user = this.props.currentUser
  }

  componentDidMount(){

  }

  render(){
    const { currentUser, workoutsTotal, distanceTotal, evelationTotal, lastActivity } = this.props

    let lastWorkoutTitle;
    let lastWorkoutDate
    if (this.props.lastActivity){
      lastWorkoutTitle = this.props.lastActivity.title
      lastWorkoutDate = this.props.lastActivity.date
    }
    return(
      <React.Fragment>
        <img className="profile-avatar" src="https://raw.githubusercontent.com/wcsteve/swell/master/app/assets/images/default_profile_icon.jpg"></img>
        <section className="athlete-text-box">
          <h2 className="athlete-name">{currentUser.username}</h2>

          <ul className="profile-stats">
            <li>
              <div className="stat-subtext">Workouts</div>
              <b>{workoutsTotal}</b>
            </li>

            <li>
              <div className="stat-subtext">Ran</div>
              <b>{distanceTotal}mi</b>
            </li>

            <li>
              <div className="stat-subtext">Climbed</div>
              <b>{evelationTotal}ft</b>
            </li>

          </ul>
        </section>

        <footer className='athlete-card-footer'>
          <section>
            <div className="activity-title">Latest Activity</div>
            <div className="last-activity-link">
              <strong>{lastWorkoutTitle} </strong>
              <time>{lastWorkoutDate}</time>
            </div>
          </section>
          <section className="training-log-link">
            <Link to={`/training`}>Your Training Log
            </Link>
            <i className="fas fa-caret-right"></i>
          </section>
        </footer>
      </React.Fragment>
    )
  }
}

export default UserProfileWidget;
