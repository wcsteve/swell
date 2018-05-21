export const weeklyStatTotals = workouts => {
  // const weeklyTotals = new Array(7).fill(new Array());
  const weeklyTotals = [ 0, 0, 0, 0, 0, 0, 0 ]
  const today = new Date();
  const lastSunday = new Date(today.setDate(today.getDate()-today.getDay()));
  const nextSunday = new Date(today.setDate(lastSunday.getDate() + 7));

  for (let workoutId in workouts) {
    const currentWorkout = workouts[workoutId]
    let dateObject = new Date(currentWorkout.workoutDate.split('-'));
    let dayOfWeek = dateObject.getDay()

    if (dateObject >= lastSunday && dateObject < nextSunday) {
      weeklyTotals[dayOfWeek] += currentWorkout.route.distance;
    }
  }

  console.log('*', weeklyTotals)
  return weeklyTotals;
};

export const statTotalsByMonth = stats => {
  const monthTotals = new Array(12).fill([]);
  let distance = [0, 0];
  let duration = [0, 0];
  let elevation = [0, 0];
  let activities = [0, 0];
  let maxStats = {
    time: 0,
    distance: 0,
    elevationGain: 0,
    activities: 0,
  }

  for (let date in stats) {
    let dateObject = new Date(date.split('-'));
    let month = dateObject.getMonth();
    monthTotals[month] = monthTotals[month].concat(stats[date]);
    let singleDateDistance = 0;
    let singleDateDuration = 0;
    let singleDateElevation = 0;
    let singleDateActivities = 0;

    stats[date].forEach((stat) => {
      distance[0] += stat.distance;
      duration[0] += stat.time / 60;
      elevation[0] += stat.elevationGain;
      activities[0] += 1
      singleDateDistance += stat.distance;
      singleDateDuration += stat.time / 60;
      singleDateElevation += stat.elevationGain;
      singleDateActivities += 1;

    })
    if (singleDateDistance > maxStats.distance) {
      maxStats.distance = singleDateDistance
    }

    if (singleDateDuration > maxStats.time) {
      maxStats.time = singleDateDuration
    }

    if (singleDateElevation > maxStats.elevationGain) {
      maxStats.elevationGain = singleDateElevation
    }

    if (singleDateActivities > maxStats.activities) {
      maxStats.activities = singleDateActivities
    }

  }

  return [monthTotals, distance, duration, elevation, activities, maxStats];
};

// function computeStatTotalMax(stat, distance, duration, elevation, activities){
//   distance[0] += stat.distance;
//   duration[0] += stat.time;
//   elevation[0] += stat.elevationGain;
//   activities[0] += 1
// }
