
export const selectUserRoutes = (routes, userId) => {
  const userRoutes = Object.keys(routes).map(
    (routeId) => (
      if (routes[routeId].user_id === userId) {
        return routes[routeId];
      }
  );

  return userRoutes;
}
