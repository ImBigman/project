require 'rails_helper'

RSpec.describe PagesController, type: :controller do
  let!(:section) { create :section }
  let!(:episode_list) { create_list(:episode, 3, section: section) }

  describe 'GET #episodes' do
    it 'populates of array of all episodes' do
      get :episodes
      expect(assigns(:episodes)).to match_array(episode_list)
    end

    it 'return correct response' do
      get :episodes
      expect(JSON.parse(response.body)['data']).to eq JSON.parse(episode_list.reverse.to_json)
    end
  end
end
