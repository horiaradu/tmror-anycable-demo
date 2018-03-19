Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  root 'home#index'
  post 'trigger-broadcast', to: 'home#trigger_broadcast'

  mount ActionCable.server => '/cable' if ENV['ACTIONCABLE_DEPLOYMENT']
end
