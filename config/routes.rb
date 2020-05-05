require 'sidekiq/web'

Rails.application.routes.draw do
  mount Sidekiq::Web => '/sidekiq'

  root 'pages#index'
  get 'episodes', to: 'pages#episodes'
end
