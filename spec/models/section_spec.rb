require 'rails_helper'

RSpec.describe Section, type: :model do
  it { is_expected.to have_many(:episodes).dependent(:destroy) }

  it { is_expected.to validate_presence_of :title }
  it { is_expected.to validate_presence_of :description }
end
