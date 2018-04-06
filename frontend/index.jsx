import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
import {fetchRoutes, fetchRoute, createRoute, updateRoute, deleteRoute} from './util/route_api_util'

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
  window.fetchRoutes = fetchRoutes;
  window.fetchRoute = fetchRoute;
  window.createRoute = createRoute;
  window.updateRoute = updateRoute;
  window.deleteRoute = deleteRoute;
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  ReactDOM.render(<Root store={ store } />, root);
})



//for testing purposes
