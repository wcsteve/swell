class Api::RoutesController < ApplicationController

  def index
    @routes = Route.where(user_id: current_user.id)
    if @routes
      render :index
    else
      render json: ["User Routes Not Found"], status: 404
    end
  end

  def show
    @route = Route.find_by(id: params[:id])
    if @route
      render :show
    else
      render json: ["Route not found, please run again"], status: 404
    end
  end

  def create
    @route = Route.new(route_params)
    @route.user_id = current_user.id
    if @route.save
      render :show
    else
      render json: @route.errors.full_messages, status: 404
    end
  end

  def update
    @route = Route.find_by(id: params[:id])
    if @route.update(route_params)
      render :show
    else
      render json: @route.errors.full_messages, status: 404
    end
  end

  def destroy
    debugger
    @route = Route.find_by(id: params[:id])
    if @route
      @route.update(user_id: nil)
      render json: {}
    else
      render json: ["Route undeleteable ?!? Delete again?!"], status: 400
    end
  end

  def route_params
    params.require(:route).permit(
      :user_id, :title, :description, :distance, :distance_unit, :duration,
      :elevation_gain, :polyline
    )
  end

end
