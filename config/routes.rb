Rails.application.routes.draw do
  root 'static_pages#home'
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
  namespace :api do
    get '/random_greeting', to: 'greetings#random_greeting'
  end
end
