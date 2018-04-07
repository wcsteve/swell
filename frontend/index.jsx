import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
import {requestAllRoutes,
requestSingleRoute,
createRoute,
updateRoute,
deleteRoute} from './actions/route_actions';

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
  window.requestAllRoutes = requestAllRoutes;
  window.requestSingleRoute = requestSingleRoute;
  window.createRoute = createRoute;
  window.updateRoute = updateRoute;
  window.deleteRoute = deleteRoute;
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  ReactDOM.render(<Root store={ store } />, root);
})



//for testing purposes
