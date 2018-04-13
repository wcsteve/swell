

export const selectUserRoutes = (state) => {
  const userRoutes = Object.values(state.entities.routes)
  return userRoutes;
}

export const selectUserWorkouts = (state) => {
  const userWorkouts = Object.values(state.entities.workouts)
  return userWorkouts;
}

export const selectDistance = (state) => {
  const distance = Object.values(state.entities.workouts.routes.distance)
  return distance;
}

function includedInLastWeek(workout, lastSunday) {
  let workoutDate = new Date(workout.workout_date)
  return (workoutDate > lastSunday)
}

function getLastSunday(){
  let today = new Date();
  today.setDate(today.getDate() - today.getDay());
  return today;
}

export const selectLastWeekWorkouts = (state) => {
  let workoutArray = selectUserWorkouts(state)
  let lastSunday = getLastSunday()
  const lastWorkouts = workoutArray.filter(
    (workout) => includedInLastWeek(workout, lastSunday));

  return lastWorkouts;
}
