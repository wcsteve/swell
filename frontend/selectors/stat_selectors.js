export const weeklyStatTotals = stats => {
  // stats.forEach(stat => {
  //   console.log
  // })
  return 1;
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
