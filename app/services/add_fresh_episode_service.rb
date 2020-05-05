class AddFreshEpisodeService
  def self.call(url, data: nil)
    new_episode = data || FindFreshEpisodeService.call(url)

    if Episode.find_by(title: new_episode[:title]).blank?
      Section.last.episodes.create(thumbs: new_episode[:thumbs],
                                   title: new_episode[:title],
                                   description: new_episode[:description],
                                   url: "https://www.youtube.com/embed/#{new_episode[:url]}")
    end
  end
end
