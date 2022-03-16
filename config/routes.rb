Rails.application.routes.draw do
  resources :flash_cards, only: [:index, :show, :create, :update, :destroy]
  resources :users, only: [:index, :show, :create, :update, :destroy]
  # resources :article_cards, only: [:index, :show]
  resources :articles, only: [:index, :show]
  resources :flash_sets, only: [:index, :show, :create, :update, :destroy]
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"

  # get '/hello', to: 'application#hello_world'
end
