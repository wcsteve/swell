import React from "react";
import UserProfileWidgetContainer from './workout/user_profile_widget_container'
import WorkoutStatsWidgetContainer from './workout/workout_stats_widget_container'
import WorkoutFeedContainer from './workout/workout_feed_container'

class UserProfileComponenet extends React.Component{


  render(){

    return (
      <main className='user-profile-page'>
        <div className='user-profile-widget-container'>
          <UserProfileWidgetContainer />
        </div>

        <div className='workout-stats-widget'>
          <WorkoutStatsWidgetContainer />
        </div>

        <div className='workout-feed-container'>
          <WorkoutFeedContainer />
        </div>

      </main>
    )
  }
}

export default UserProfileComponenet;
