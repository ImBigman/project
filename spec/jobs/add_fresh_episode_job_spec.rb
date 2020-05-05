require 'rails_helper'

RSpec.describe AddFreshEpisodeJob, type: :job do
  let(:url) { 'https://www.youtube.com/channel/UCvasfOIImo7D9lQkb1Wc1tw/videos' }

  it 'calls AddFreshEpisodeService' do
    expect(AddFreshEpisodeService).to receive(:call).with(url)
    described_class.perform_now
  end
end
