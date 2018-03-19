web: bundle exec puma -C config/puma.rb
# cable: ACTIONCABLE_DEPLOYMENT=true bundle exec puma -p 28080 cable/config.ru
cable: ANYCABLE_DEPLOYMENT=true ACTIONCABLE_DEPLOYMENT=true bundle exec ./bin/anycable
cable-go: anycable-go -addr='localhost:28080'
