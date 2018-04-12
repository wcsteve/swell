import React from "react";
import WorkoutFeedItem from './workout_feed_item';
// import Modal from '../modal/modal'

class WorkoutFeedComponent extends React.Component{
  constructor(props){
    super(props);

  }



  componentDidMount(){
    this.props.requestWorkouts().then(this.props.requestAllRoutes())

  }


  render(){

    let workouts;
    if (this.props.userWorkouts){
      workouts = (
        this.props.userWorkouts.map(
          (workout) => (
            <WorkoutFeedItem
              username={this.props.currentUser.username}
              workout={workout}
              edit={this.props.updateWorkout}
              delete={this.props.deleteWorkout}
              key={workout.id}
              route={workout.route}
              />
          )
        )
      )
    }

    return (
      <React.Fragment>
        <header className='feed-header'> </header>
        <summary>
          <div className="feed-background"></div>
          <main>
            <h3></h3>
            <p></p>
          </main>
        </summary>

        <div className="feed-list">
          <ul>
            {workouts}
          </ul>
        </div>

        <div className="feed-no-entries">
        </div>

      </React.Fragment>
    )
  }
  }

export default WorkoutFeedComponent;



// <Modal />


// <button className="create-workout-button"
//   onClick={() => this.props.openModal('workout')}>Add Workout
// </button>
