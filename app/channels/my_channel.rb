class MyChannel < ApplicationCable::Channel
  def subscribed
    # current_user.appear
    stream_for 'hello'
  end

  def unsubscribed
    # current_user.disappear
  end

  def do_stuff(data)
    puts data
  end
end
