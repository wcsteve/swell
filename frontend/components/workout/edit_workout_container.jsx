// import React from 'react';
// import { Link } from 'react-router-dom';
// import { withRouter } from 'react-router-dom';
// import {requestSingleWorkout, updatePost} from '../../actions/workout_actions';
// import { connect } from 'react-redux';
// import { requestAllRoutes } from '../../actions/route_actions';
// import { openModal, closeModal } from '../../actions/modal_actions';
//
//
//
// const mapStateToProps = (state, ownProps) => {
//   // const defaultPost = { title: '', time: '', workout_date: '', route_id: null};
//   const workout = state.entities.workouts[ownProps.match.params.workoutId] || defaultPost;
//   const formType = 'Update Workout';
//   const routes = state.entities.routes;
//   return { workout, formType, routes };
// };
//
// const mapDispatchToProps = (dispatch) => {
//   return {
//     fetchWorkout: id => dispatch(requestSingleWorkout(id)),
//     requestAllRoutes: () => dispatch(requestAllRoutes()),
//     processForm: workout => dispatch(updatePost(workout)),
//     closeModal: () => dispatch(closeModal())
//   };
// };
//
//
//
// class EditWorkoutFormComponent extends React.Component{
//   constructor(props){
//     super(props)
//     this.handleInput = this.handleInput.bind(this);
//     this.handleSubmit = this.handleSubmit.bind(this);
//     this.handleSelectChange = this.handleSelectChange.bind(this)
//     this.state = {
//       title: this.props.workout.title,
//       workout_date: this.props.workout.time,
//       time: this.props.workout.workout_date,
//       route_id: this.props.workout.route_id
//     }
//   }
//
//   componentDidMount(){
//     this.props.fetchWorkout(this.props.match.params.workoutId);
//     this.props.requestAllRoutes();
//   }
//
//   handleInput(field){
//     return (e) => this.setState({[field]: e.target.value})
//   }
//
//   handleSelectChange(e){
//     this.setState({"route_id": e.target.value})
//   }
//
//   handleSubmit(e){
//     e.preventDefault();
//     this.props.processForm(this.state)
//   }
//
//   render(){
//     // const dataListOptions = this.props.routes.map(
//     //   (route) => <option
//     //                 key={route.id}
//     //                 value={route.id}>{route.title}
//     //              </option>
//     // )
//
//     return(
//       <React.Fragment>
//         <div className="workout-form-container">
//
//           <header>
//             <div onClick={this.props.closeModal} className="close-x">x</div>
//             <h1>Save</h1>
//           </header>
//
//           <form onSubmit={this.handleSubmit} className="workout-form">
//
//             <section className="workout-input">
//
//               <input
//                 type="text"
//                 id="route-modal-title"
//                 onChange={this.handleInput('title')}
//                 placeholder="Title (required)"
//                 value={this.state.title}
//                 />
//             </section>
//
//             <section className="workout-input">
//
//               <input
//                 type="date"
//                 id="route-modal-title"
//                 onChange={this.handleInput('workout_date')}
//                 placeholder="Date"
//                 value={this.state.workout_date}
//                 />
//             </section>
//
//             <section className="workout-input">
//
//               <input
//                 type="time"
//                 className="without"
//                 id="route-modal-title"
//                 onChange={this.handleInput('time')}
//                 placeholder="Time"
//                 value={this.state.time}
//                 />
//             </section>
//
//
//             <select value={this.state.value} onChange={this.handleSelectChange}>
//                <option value="" selected disabled hidden>Select Route</option>
//
//             </select>
//
//
//
//
//
//             <label className="private-checkbox">
//               <input type="checkbox"/>
//                  Private
//               <i className="fa fa-lock" aria-hidden="true"></i>
//             </label>
//
//             <nav className="form-button-bar">
//
//               <button
//                 className="form-cancel"
//                 onClick={this.props.closeModal}>Cancel</button>
//
//               <input type="submit" value="Save" className="form-save"/>
//
//             </nav>
//
//           </form>
//
//           </div>
//       </React.Fragment>
//     )
//   }
// }
//
//
//
// export default withRouter(connect(mapStateToProps, mapDispatchToProps)(EditWorkoutFormComponent));
