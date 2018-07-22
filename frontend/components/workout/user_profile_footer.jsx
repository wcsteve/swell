import React from 'react';
import { Link } from 'react-router-dom';


const Profile_Footer = function(props) {
  const {lastWorkoutTitle, lastWorkoutDate} = props
  return (
    <footer className='athlete-card-footer'>

      <section>

        <div className="activity-title">Latest Activity</div>
        <div className="last-activity-link">
          <strong>{lastWorkoutTitle} </strong>
          <time>{lastWorkoutDate}</time>
        </div>

      </section>

      <section className="training-log-link">

        <Link to={`/training`}>Your Training Log<i className="fas fa-caret-right"></i>
        </Link>

      </section>

    </footer>
  )
}

export default Profile_Footer;
