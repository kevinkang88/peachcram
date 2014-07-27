class Ytplayer < ActiveRecord::Base
  # attr_accessible :title, :body
  include HTTParty
  base_uri 'http://gdata.youtube.com'

  def initialize()
    @options = { query: {api_key: "AIzaSyCgGbkzkqoXcZZMt3P1fvCjQTJFG8kJcXk"} }
  end

  def get
    self.class.get("http://gdata.youtube.com/feeds/api/videos?alt=json&max-results=10&v=2&key=AIzaSyCgGbkzkqoXcZZMt3P1fvCjQTJFG8kJcXk&q=korean%20drama%20instrumental%20ost&safeSearch=none&time=all_time&uploader=partner")
  end

end

