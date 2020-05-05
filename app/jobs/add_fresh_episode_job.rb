class AddFreshEpisodeJob < ApplicationJob
  queue_as :default

  URL = 'https://www.youtube.com/channel/UCvasfOIImo7D9lQkb1Wc1tw/videos'.freeze

  def perform
    AddFreshEpisodeService.call(URL)
  end
end
