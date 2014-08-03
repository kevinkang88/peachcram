class PagesController < ApplicationController
  def main
  end

  def guide
    @guide_page = true
  end
end