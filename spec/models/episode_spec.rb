require 'rails_helper'

RSpec.describe Episode, type: :model do
  it { is_expected.to belong_to(:section) }

  it { is_expected.to validate_presence_of :thumbs }
  it { is_expected.to validate_presence_of :title }
  it { is_expected.to validate_presence_of :url }
end
