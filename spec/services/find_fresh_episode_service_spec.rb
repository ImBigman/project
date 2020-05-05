require 'rails_helper'
require 'nokogiri'

RSpec.describe FindFreshEpisodeService do
  let(:url) { Rails.root.join('spec/fixtures/Pro Conf - YouTube.html') }
  let(:page) { File.open(url) { |file| Nokogiri::HTML(file) } }
  let(:real_url) { 'https://www.youtube.com/channel/UCvasfOIImo7D9lQkb1Wc1tw/videos' }

  it 'find on target page thumbs' do
    within '.ytd-grid-video-renderer' do
      expect(page).to have_css('img'[:src])
    end
  end

  it 'find on target page title' do
    within '.ytd-grid-video-renderer' do
      expect(page).to have_css('#video-title'[:title])
    end
  end

  it 'find on target page url' do
    within '.ytd-grid-video-renderer' do
      expect(page).to have_css('#video-title')
    end
  end

  it 'return hash with Episode params' do
    expect(described_class.call(real_url)).to match(hash_including(:thumbs, :title, :description, :url))
  end
end
