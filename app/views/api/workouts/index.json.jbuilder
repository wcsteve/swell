@workouts.each do |workout|
  json.set! workout.id do
    json.extract! workout, :user_id, :title, :route_id, :activity_type,
    :time, :workout_date, :created_at, :id
  end
end
