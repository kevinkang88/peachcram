class YtplayersController < ApplicationController
  def level_one_song_maker
    api = Ytplayer.new
    videos = []
    @video_ids = {}
    JSON.parse(api.get.body)["feed"]["entry"].each do |entry|
      videos << entry["content"]["src"].slice(25,11)
    end
    videos.each_with_index do |el,i|
      @video_ids[i] = el
    end
    # require 'pry'; binding.pry
    render json: @video_ids
  end

end
