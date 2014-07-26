class PagesController < ApplicationController
  def main
    api = Ytplayer.new
    @video_ids = []
    JSON.parse(api.get.body)["feed"]["entry"].each do |entry|
      @video_ids << entry["content"]["src"].slice(25,11)
    end

    # require 'pry'; binding.pry
  end
end
