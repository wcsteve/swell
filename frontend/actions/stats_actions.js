import * as ApiUtil from '../util/stat_api_util';

export const RECEIVE_STATS = "RECEIVE_STATS";
export const RECEIVE_WEEK_STATS = "RECEIVE_WEEK_STATS";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";

export const receiveStats = (stats) => ({
  type: RECEIVE_STATS,
  stats
});

export const receiveWeekStats = (weekStats) => ({
  type: RECEIVE_WEEK_STATS,
  weekStats
});

export const receiveErrors = (errors) => ({
  type: RECEIVE_ERRORS,
  errors
});

export const requestStats = () => (dispatch) => (
  ApiUtil.fetchAllStats().then((stats) => dispatch(receiveStats(stats)),
  (error) => dispatch(receiveErrors(error.responseJSON)))
);

export const requestWeekStats = () => (dispatch) => (
  ApiUtil.fetchWeekStats().then((stats) => dispatch(receiveStats(stats)),
  (error) => dispatch(receiveErrors(error.responseJSON)))
);
