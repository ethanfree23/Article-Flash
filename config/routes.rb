Rails.application.routes.draw do
  resources :flash_cards, only: [:index, :show, :create, :update, :destroy]
  resources :users, only: [:index, :show, :create, :update, :destroy]
  # resources :article_cards, only: [:index, :show]
  resources :articles, only: [:index, :show]
  resources :flash_sets, only: [:index, :show, :create, :update, :destroy]
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"

  post '/signup', to: 'users#create'
  # Route post “/signup”, to: “users#create” => responsible for Signup if the customer does not have an account
  get '/me', to: 'users#show'
  # Route get “/me”, to: “users#show” => responsible for auto-login and remember session

  post '/login', to: 'session#login'
  # Route post “/login”, to: “sessions#login” => responsible for login
  delete '/logout', to: 'session#logout'
  # Route delete “/logout”, to: “sessions#logout” => responsible for logout

  post '/reset', to: 'passwords#reset'
  # Route post “/reset”, to: “passwords#reset” => responsible for reset password.

  get '/myanalytics', to: 'application#hello_world'
end
