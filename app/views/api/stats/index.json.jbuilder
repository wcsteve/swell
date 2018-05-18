@organized_stats.each do |day_of_week, stats|
  json.set! (day_of_week) do
    json.array! stats do |stat|
        # json.extract! stat, :workout_date
        json.time ((stat.workout_time_hours.to_f) * 60 + stat.workout_time_minutes.to_f)
        json.distance stat.route.distance
        json.elevation_gain stat.route.elevation_gain.to_i
        json.workout_date stat.workout_date.to_date
    end
  end
end
