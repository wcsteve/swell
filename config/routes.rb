Rails.application.routes.draw do


  namespace :api, defaults: {format: :json} do
    resource :session, only: [:create, :destroy]
    resources :users, only: [:create, :show]
    resources :routes, only: [:index, :show, :create, :update, :destroy]
    resources :workouts, only: [:index, :show, :create, :update, :destroy]
    resources :workouts do
      get 'stats', on: :collection
    end
  end

  root "static_pages#root"

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
