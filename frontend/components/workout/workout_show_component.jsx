// import React from 'react';
// import { Link } from 'react-router-dom';
// import Modal from '../modal/modal'
//
//
// class WorkoutShow extends React.Component {
//   constructor(props){
//     super(props);
//
//   }
//
//   componentDidMount() {
//     this.props.fetchWorkout(this.props.match.params.workoutId);
//   }
//
//
//   render() {
//
//     let workout = '';
//     if (this.props.workout !== undefined) {
//       workout = this.props.workout
//     }
//     return (
//       <div>
//         <Modal />
//         <h3>{workout.title}</h3>
//         <button onClick={() => this.props.openModal('editWorkout')}>Edit Workout</button>
//         <Link to="/">Back to Index</Link>
//       </div>
//     );
//   }
// }
//
// export default WorkoutShow;
