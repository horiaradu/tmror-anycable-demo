class MyChannel < ApplicationCable::Channel
  def subscribed
    # current_user.appear
    @x = 0

    stream_for 'hello'
  end

  def unsubscribed
    # current_user.disappear
  end

  def do_stuff(data)
    @x += 1
    puts @x

    puts data
  end
end
