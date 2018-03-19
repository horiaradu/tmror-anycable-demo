require_relative '../config/environment'
$stdout.sync = true

Rails.application.eager_load!

run ActionCable.server
