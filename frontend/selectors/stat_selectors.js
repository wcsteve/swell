export const weeklyStatTotals = workouts => {
  const weeklyTotals = {
    time: 0,
    distance: 0,
    elevationGain: 0
  };
  const lastWeek = [0, 0, 0, 0, 0, 0, 0];

  const weekAndAnnualCount = selectLastWeekWorkouts(workouts);
  const lastWeekWorkouts = weekAndAnnualCount[0];

  for (let i = 0; i < lastWeekWorkouts.length; i++) {
    let currentWorkout = lastWeekWorkouts[i];
    let dateObject = new Date(currentWorkout.workoutDate.split('-'));
    let dayOfWeek = dateObject.getDay();
    lastWeek[dayOfWeek] += currentWorkout.route.distance;

    let hours = parseInt(currentWorkout.workoutTimeHours);
    let minutes = parseInt(currentWorkout.workoutTimeMinutes);
    let workoutTime = hours * 60 + minutes;

    weeklyTotals.time += workoutTime;
    weeklyTotals.elevationGain += parseInt(currentWorkout.route.elevation_gain);
    weeklyTotals.distance += currentWorkout.route.distance;
  }
  return [lastWeek, weeklyTotals, 0];
};

function selectLastWeekWorkouts(workouts) {
  const today = new Date();
  const lastSunday = new Date(today.setDate(today.getDate() - today.getDay()));
  const nextSunday = new Date(today.setDate(lastSunday.getDate() + 7));
  lastSunday.setHours(0, 0, 0, 0);
  nextSunday.setHours(0, 0, 0, 0);

  const selectedWorkouts = [];
  let annualTotal = 0;

  for (let workoutId in workouts) {
    const currentWorkout = workouts[workoutId];
    let dateObject = new Date(currentWorkout.workoutDate.split('-'));
    dateObject.setHours(0, 0, 0, 0);

    if (dateObject >= lastSunday && dateObject < nextSunday) {
      selectedWorkouts.push(currentWorkout);
    }

    if (dateObject.getYear() === 2018) {
      annualTotal += currentWorkout.route.distance;
    }
  }

  return [selectedWorkouts, annualTotal];
}

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
    activities: 0
  };

  for (let date in stats) {
    let dateObject = new Date(date.split('-'));
    let month = dateObject.getMonth();
    monthTotals[month] = monthTotals[month].concat(stats[date]);
    let singleDateDistance = 0;
    let singleDateDuration = 0;
    let singleDateElevation = 0;
    let singleDateActivities = 0;

    stats[date].forEach(stat => {
      distance[0] += stat.distance;
      duration[0] += stat.time / 60;
      elevation[0] += stat.elevationGain;
      activities[0] += 1;
      singleDateDistance += stat.distance;
      singleDateDuration += stat.time / 60;
      singleDateElevation += stat.elevationGain;
      singleDateActivities += 1;
    });
    if (singleDateDistance > maxStats.distance) {
      maxStats.distance = singleDateDistance;
    }

    if (singleDateDuration > maxStats.time) {
      maxStats.time = singleDateDuration;
    }

    if (singleDateElevation > maxStats.elevationGain) {
      maxStats.elevationGain = singleDateElevation;
    }

    if (singleDateActivities > maxStats.activities) {
      maxStats.activities = singleDateActivities;
    }
  }

  return [monthTotals, distance, duration, elevation, activities, maxStats];
};
