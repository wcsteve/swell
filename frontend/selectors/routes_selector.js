
// export const selectUserRoutes = (routes, userId) => {
//   const userRoutes = Object.keys(routes).map((routeId), function(routeId) {
//     if (routes[routeId].user_id === userId) {
//       return routes[routeId];
//     }
//   })
//   return userRoutes;
// }

export const selectUserRoutes = (state) => {
  const userRoutes = Object.values(state.entities.routes)
  return userRoutes;
}

export const selectUserWorkouts = (state) => {
  const userWorkouts = Object.values(state.entities.workouts)
  return userWorkouts;
}
