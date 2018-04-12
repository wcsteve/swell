import React from "react";
import WorkoutFeedItem from './workout_feed_item';
import Modal from '../modal/modal'

class WorkoutFeedComponent extends React.Component{
  constructor(props){
    super(props);

  }



  componentDidMount(){
    this.props.requestWorkouts()
    // .then(this.props.requestAllRoutes())
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
              openModal={this.props.openModal}
              requestWorkoutId={this.props.requestWorkoutId}
              />
          )
        )
      )
    }

    let quote = 'Winning is about heart, not just legs. It\'s got to be in the right place.'

    return (
      <React.Fragment>
        <Modal />
        <header className='feed-header'> </header>
        <summary>
          <div className="feed-background"></div>
          <main>
            <h3 className='feed-summary-header'>Harder Faster Stronger</h3>
            <p className='quote'>{quote}</p>
            <button className="create-workout-button"
              onClick={() => this.props.openModal('workout')}>Add Workout
            </button>
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
