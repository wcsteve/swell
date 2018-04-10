class Api::WorkoutsController < ApplicationController

  def index
    @workouts = Workout.where(user_id: current_user.id)
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
    if @workout.save
      redirect_to api_workouts_url(@workout)
    else
      render json: @workout.errors.full_messages, status: 404
    end
  end

  def update
    @workout = Workout.find_by(id: params[:id])
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
      :user_id, :title, :route_id, :activity_type, :time, :workout_date
    )
  end

end
