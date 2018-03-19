class MyChannel < ApplicationCable::Channel
  def subscribed
    # current_user.appear
    stream_for 'hello'
  end

  def unsubscribed
    # current_user.disappear
  end

  def do_stuff(data)
    Rails.logger.error data
  end
end
