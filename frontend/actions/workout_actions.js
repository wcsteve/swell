import * as ApiUtil from '../util/workout_api_util';

export const RECEIVE_WORKOUTS = "RECEIVE_WORKOUTS";
export const RECEIVE_WORKOUT = "RECEIVE_WORKOUT";
export const REMOVE_WORKOUT = "REMOVE_WORKOUT";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";

export const receiveWorkouts = (workouts) => ({
  type: RECEIVE_WORKOUTS,
  workouts
});

export const receiveSingleWorkout = (workout) => ({
  type: RECEIVE_WORKOUT,
  workout,
});

export const removeWorkout = (workoutId) => ({
  type: REMOVE_WORKOUT,
  workoutId
});

export const receiveErrors = (errors) => ({
  type: RECEIVE_ERRORS,
  errors
});

export const requestAllWorkouts = () => (dispatch) => (
  ApiUtil.fetchWorkouts().then((workouts) => dispatch(receiveWorkouts(workouts)),
  (error) => dispatch(receiveErrors(error.responseJSON)))
);

export const requestSingleWorkout = (workoutId) => (dispatch) => (
  ApiUtil.fetchWorkout(workoutId).then((workout) => dispatch(receiveSingleWorkout(workout)),
  (error) => dispatch(receiveErrors(error.responseJSON)))
);

export const createWorkout = (workout) => (dispatch) => (
  ApiUtil.createWorkout(workout).then((workout) => dispatch(receiveSingleWorkout(workout)),
  (error) => dispatch(receiveErrors(error.responseJSON)))
);

export const updateWorkout = (workout) => (dispatch) => (
  ApiUtil.updateWorkout(workout).then((workout) => dispatch(receiveSingleWorkout(workout)),
  (error) => dispatch(receiveErrors(error.responseJSON)))
);

export const deleteWorkout = (workoutId) => (dispatch) => (
  ApiUtil.deleteWorkout(workoutId).then((workout) => dispatch(removeWorkout(workoutId)),
  (error) => dispatch(receiveErrors(error.responseJSON)))
);
