export const signup = (user) => (
  $.ajax({
    url: "/api/users",
    method: "post",
    data: { user }
  })
)

export const signin = (user) => (
  $.ajax({
    url: "/api/session",
    method: "post",
    data: { user }
  })
)

export const logout = () => (
  $.ajax({
    url: "/api/session",
    method: "delete",
  })
)
