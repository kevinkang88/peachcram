class Ytplayer < ActiveRecord::Base
  # attr_accessible :title, :body
  include HTTParty
  base_uri 'http://gdata.youtube.com'

  def initialize()
    @options = { query: {api_key: ENV["SECRET_KEY"]} }
  end

  def get_level_one
    key = @options[:query][:api_key]
    results = 49
    search_term = ["calm","study","music"].join("%20")
    self.class.get("http://gdata.youtube.com/feeds/api/videos?alt=json&max-results=#{results}&v=2&key=#{key}&q=#{search_term}&safeSearch=none&time=all_time&uploader=partner")
  end

end

