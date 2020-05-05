class PagesController < ApplicationController
  def index; end

  def episodes
    @episodes = Section.first.episodes.order(id: :desc)

    render json: { data: @episodes }
  end
end
