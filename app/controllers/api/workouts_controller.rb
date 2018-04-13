class Api::WorkoutsController < ApplicationController

  def index
    @workouts = Workout.includes(:route).where(user_id: current_user.id)
    if @workouts
      render :index
    else
      render json: ["User Routes Not Found"], status: 404
    end
  end

  def show
    @workout = Workout.find_by(id: params[:id])
    if @workout
      render :show
    else
      render json: ["Route not found, please run again"], status: 404
    end
  end

  def create
    @workout = Workout.new(workout_params)
    @workout.user_id = current_user.id
    @workout.workout_date = Date.parse(workout_params[:workout_date])

    if @workout.save
      render :show
    else
      render json: @workout.errors.full_messages, status: 404
    end
  end

  def update
    @workout = Workout.find_by(id: params[:id])
    if params[:workout_date]
      @workout.workout_date = Date.parse(params[:workout_date])
    end
    if @workout.update(workout_params)
      render :show
    else
      render json: @workout.errors.full_messages, status: 404
    end
  end


  def destroy
    @workout = Workout.find_by(id: params[:id])
    if @workout
      @workout.destroy
      render json: {}
    else
      render json: ["Route undeleteable ?!? Delete again?!"], status: 400
    end
  end

  def workout_params
    params.require(:workout).permit(
      :user_id, :title, :route_id, :activity_type, :time, :workout_date, :workout_time_hours,
      :workout_time_minutes
    )
  end

end
