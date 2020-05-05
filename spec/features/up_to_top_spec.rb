require 'rails_helper'

feature 'User can use button for scroll to up.', %q(
"In order to going to top
 I'd like to be able to scroll to top."
) do
  let!(:section) { create(:section) }
  let!(:episodes) { create_list(:episode, 5, section: section) }

  before { visit root_path }

  it 'invisible button on top', js: true do
    button = find('#up-to-top > aside', visible: :all)
    expect(button[:tabindex]).to eq '-1'
  end

  it 'show button when scroll-down', js: true do
    button = find('#up-to-top > aside', visible: :all)

    page.execute_script 'window.scrollTo(0,8000)'
    expect(button[:tabindex]).to eq '0'
  end
end
