export const selectedMonthWorkout = function(workouts, year, month) {
  const firstDayOfMonth = new Date(year, month, 1);
  const lastDayOfMonth = new Date(year, parseInt(month) + 1, 0);
  const startSunday = new Date(firstDayOfMonth.setDate(firstDayOfMonth.getDate()-firstDayOfMonth.getDay()));
  const lastSunday = new Date(lastDayOfMonth.setDate(lastDayOfMonth.getDate()-lastDayOfMonth.getDay() + 7 ));
  const selectedWorkouts = [];

  for (let workoutID in workouts) {
    let workout = workouts[workoutID];
    let workoutDate = new Date(workout.workoutDate.split('-'))

    if (workoutDate >= startSunday && workoutDate < lastSunday) {
      workout.id = workoutID
      selectedWorkouts.push(workout);
    }
  }

  return selectedWorkouts;
}
