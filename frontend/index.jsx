import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
import {requestAllWorkouts,
requestSingleWorkout,
createWorkout,
updateWorkout,
deleteWorkout} from './actions/workout_actions';
import {receiveSingleUiStat} from './actions/ui_stat_actions';

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById('root');
  let store;
  if (window.currentUser) {
    const preloadedState = {session: {currentUser: window.currentUser}};
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }
  window.receiveSingleUiStat = receiveSingleUiStat
  window.requestAllWorkouts = requestAllWorkouts;
  window.requestSingleWorkout = requestSingleWorkout;
  window.createWorkout = createWorkout;
  window.updateWorkout = updateWorkout;
  window.deleteWorkout = deleteWorkout;
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  ReactDOM.render(<Root store={ store } />, root);
})



//for testing purposes
