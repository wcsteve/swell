@routes.each do |route|
  json.set! route.id do
    json.extract! route, :user_id, :title, :description, :distance,
    :distance_unit, :duration, :elevation_gain, :polyline
  end
end
