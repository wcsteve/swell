export const fetchAllStats = () => (
  $.ajax({
      url: '/api/stats/',
      method: 'get',
  })
)

export const fetchWeekStats = () => (
  $.ajax({
      url: `/api/stats/0`,
      method: 'get',
  })
)
