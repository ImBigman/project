require 'open-uri'
require 'nokogiri'

class FindFreshEpisodeService
  def self.call(url)
    html = URI.open(url, &:read)
    document = Nokogiri::HTML(html)
    new_episode = document.css('.yt-lockup-dismissable')[0]
    title_node =  new_episode.children[3].children[1].children[0].text[1..-1].split('-')
    {
      thumbs: new_episode.css('img')[0]['src'],
      title: title_node[0].strip,
      description: title_node[1].strip,
      url: new_episode.css('a')[1]['href'][9..-1]
    }
  end
end
