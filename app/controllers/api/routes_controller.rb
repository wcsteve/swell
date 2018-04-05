class Api::RoutesController < ApplicationController

  def index
    @routes = Route.all
    render :json
  end

  def show
  end

  def create
  end

  def edit
  end

  def destroy
  end

end
