class Api::RoutesController < ApplicationController

  def index
    @routes = Route.where(user_id: params[:id])
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
    if @route.save
      redirect_to api_route(@route)
    else
      render json: @route.errors.full_messages, status: 404
    end
  end

  def edit
    @route = Route.find_by(id: params[:id])
    if @route.update
      redirect_to api_route(@route)
    else
      render json: @route.errors.full_messages, status: 404
    end
  end

  def destroy
    @route = Route.find_by(id: params[:id])
    if @route
      logout
      render json: {}
    else
      render json: ["User not found"], status: 400
    end
  end

  def route_params
    params.require(:route).permit(
      :user_id, :title, :description, :distance, :distance_unit, :duration,
      :elevation_gain, :polyline
    )
  end

end
