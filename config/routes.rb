Rails.application.routes.draw do
  get 'tools/index'
  root to: "tools#index"
  resources :tools, only: [:index, :create]
end
