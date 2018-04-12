
export const RECEIVE_WORKOUT_UI = "RECEIVE_WORKOUT_UI"

export const receiveSingleUiStat = (workoutId) => ({
  type: RECEIVE_WORKOUT_UI,
  workoutId,
});
