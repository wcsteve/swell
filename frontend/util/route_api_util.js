export const fetchRoutes = () => (
  $.ajax({
      url: '/api/routes/',
      method: 'get',
  })
)

export const fetchRoute = (routeId) => (
  $.ajax({
      url: `/api/routes/${routeId}`,
      method: 'get'
  })
)

export const createRoute = (route) => (
  $.ajax({
      url: `/api/routes`,
      method: 'post',
      data: { route }
  })
)

export const updateRoute = (route) => (
  $.ajax({
      url: `/api/routes/${route.id}`,
      method: 'patch',
      data: { route }
  })
)

export const deleteRoute = (routeId) => (
  $.ajax({
      url: `/api/routes/${routeId}`,
      method: 'delete'
  })
)
