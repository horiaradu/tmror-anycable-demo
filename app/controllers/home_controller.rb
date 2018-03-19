class HomeController < ApplicationController
  def index
  end

  def trigger_broadcast
    MyChannel.broadcast_to('hello', type: 'message', payload: 'random payload')
  end
end
