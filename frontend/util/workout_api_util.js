export const fetchWorkouts = () => (
  $.ajax({
      url: '/api/workouts/',
      method: 'get',
  })
)

export const fetchWorkout = (workoutId) => (
  $.ajax({
      url: `/api/workouts/${workoutId}`,
      method: 'get'
  })
)

export const createWorkout = (workout) => (
  $.ajax({
      url: `/api/workouts`,
      method: 'post',
      data: { workout }
  })
)

export const updateWorkout = (workout) => (
  $.ajax({
      url: `/api/workouts/${workout.id}`,
      method: 'patch',
      data: { workout }
  })
)

export const deleteWorkout = (workoutId) => (
  $.ajax({
      url: `/api/workouts/${workoutId}`,
      method: 'delete'
  })
)
