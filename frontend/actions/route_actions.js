import * as ApiUtil from '../util/route_api_util';

export const RECEIVE_ROUTES = "RECEIVE_ROUTES";
export const RECEIVE_ROUTE = "RECEIVE_ROUTE";
export const REMOVE_ROUTE = "REMOVE_ROUTE";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";

export const receiveRoutes = (routes) => ({
  type: RECEIVE_ROUTES,
  routes
});

export const receiveSingleRoute = (route) => ({
  type: RECEIVE_ROUTE,
  route,
});

export const removeRoute = (routeId) => ({
  type: REMOVE_ROUTE,
  routeId
});

export const receiveErrors = (errors) => ({
  type: RECEIVE_ERRORS,
  errors
});

export const requestAllRoutes = () => (dispatch) => (
  ApiUtil.fetchRoutes().then((routes) => dispatch(receiveRoutes(routes)),
  (error) => dispatch(receiveErrors(error.responseJSON)))
);

export const requestSingleRoute = (routeId) => (dispatch) => (
  ApiUtil.fetchRoute(routeId).then((route) => dispatch(receiveSingleRoute(route)),
  (error) => dispatch(receiveErrors(error.responseJSON)))
);

export const createRoute = (route) => (dispatch) => (
  ApiUtil.createRoute(route).then((route) => dispatch(receiveSingleRoute(route)),
  (error) => dispatch(receiveErrors(error.responseJSON)))
);

export const updateRoute = (route) => (dispatch) => (
  ApiUtil.updateRoute(route).then((route) => dispatch(receiveSingleRoute(route)),
  (error) => dispatch(receiveErrors(error.responseJSON)))
);

export const deleteRoute = (routeId) => (dispatch) => (
  ApiUtil.deleteRoute(routeId).then((route) => dispatch(removeRoute(routeId)),
  (error) => dispatch(receiveErrors(error.responseJSON)))
);
