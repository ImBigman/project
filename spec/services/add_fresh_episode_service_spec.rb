require 'rails_helper'

RSpec.describe AddFreshEpisodeService do
  let!(:section) { create(:section) }
  let!(:episodes) { create_list(:episode, 2, section: section) }
  let(:url) { 'https://www.youtube.com/channel/UCvasfOIImo7D9lQkb1Wc1tw/videos' }
  let(:data) { { thumbs: 'youtube.com/', title: '# Episode', description: 'New episode from channel', url: 'youtube.com/' } }
  let(:data1) { { thumbs: 'youtube.com/', title: episodes.first.title, description: 'New episode from channel', url: 'youtube.com/' } }

  describe 'if the episode does not exist in the database' do
    it 'create new episode' do
      expect { described_class.call(url, data: data) }.to change(section.episodes, :count).by(1)
    end
  end

  describe 'if the episode already exists in the database' do
    it 'do not create new episode' do
      expect { described_class.call(url, data: data1) }.not_to change(section.episodes, :count)
    end
  end
end
