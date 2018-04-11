import React from "react";
import WorkoutFeedItem from './workout_feed_item';

class WorkoutFeedComponent extends React.Component{
  constructor(props){
    super(props);

  }



  componentDidMount(){
    this.props.requestWorkouts()

  }


  render(){

    const workouts = (
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

    return (
      <React.Fragment>
        <header className={'feed-header'}>WorkoutFeedComponent</header>
        <summary></summary>

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

// let workouts = ''
// if (this.props.userWorkouts === undefined){
//   return <div>loading</div>
// } else {
//   workouts = (
//     this.props.userWorkouts.map(
//       (workout) => (
//         <WorkoutFeedItem
//           username={this.props.currentUser}
//           workout={workout}
//           edit={this.props.updateWorkout}
//           delete={this.props.deleteWorkout}
//           />
//       )
//     )
//   )
// }
