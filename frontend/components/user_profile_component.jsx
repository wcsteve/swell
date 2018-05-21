import React from "react";
import UserProfileWidgetContainer from './workout/user_profile_widget_container'
import WorkoutStatsWidgetContainer from './workout/workout_stats_widget_container'
import WorkoutFeedContainer from './workout/workout_feed_container';
import Modal from './modal/modal'

class UserProfileComponent extends React.Component{
  constructor(props){
    super(props)

  }


  render(){


    return (
      <main className='user-profile-page'>
        <aside className='profile-aside'>

          <div className='user-profile-widget-container'>
            <UserProfileWidgetContainer />
          </div>

          <div className='workout-stats-widget'>
            <WorkoutStatsWidgetContainer />
          </div>

        </aside>



        <section className='workout-feed-container'>
          <WorkoutFeedContainer />
        </section>

        <aside className='profile-aside'>


        </aside>

      </main>
    )
  }
}

export default UserProfileComponent;
