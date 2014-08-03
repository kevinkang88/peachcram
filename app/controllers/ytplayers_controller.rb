class YtplayersController < ApplicationController
  # this end point is for the first level (*currently named easy-pz)
  def level_one_song_maker
    api = Ytplayer.new
    videos = []
    @video_ids = {}
    JSON.parse(api.get_level_four.body)["feed"]["entry"].each do |entry|
      videos << entry["content"]["src"].slice(25,11)
    end
    videos.each_with_index do |el,i|
      @video_ids[i] = el
    end
    # require 'pry'; binding.pry
    render json: @video_ids
  end

  def level_two_song_maker
    api = Ytplayer.new
    videos = []
    @video_ids = {}
    JSON.parse(api.get_level_three.body)["feed"]["entry"].each do |entry|
      videos << entry["content"]["src"].slice(25,11)
    end
    videos.each_with_index do |el,i|
      @video_ids[i] = el
    end
    # require 'pry'; binding.pry
    render json: @video_ids
  end

  def level_three_song_maker
    api = Ytplayer.new
    videos = []
    @video_ids = {}
    JSON.parse(api.get_level_two.body)["feed"]["entry"].each do |entry|
      videos << entry["content"]["src"].slice(25,11)
    end
    videos.each_with_index do |el,i|
      @video_ids[i] = el
    end
    # require 'pry'; binding.pry
    render json: @video_ids
  end

  def level_four_song_maker
    api = Ytplayer.new
    videos = []
    @video_ids = {}
    JSON.parse(api.get_level_one.body)["feed"]["entry"].each do |entry|
      videos << entry["content"]["src"].slice(25,11)
    end
    videos.each_with_index do |el,i|
      @video_ids[i] = el
    end
    # require 'pry'; binding.pry
    render json: @video_ids
  end
end

