@routes.each do |route|
  json.set! route.id do
    json.extract! route, :user_id, :title, :description, :distance,
    :distance_unit, :duration, :elevation_gain, :polyline, :path, :id, :created_at
  end
end

# json.my_datetime_field(route.created_at.strftime('%Y/%m/%d'))
