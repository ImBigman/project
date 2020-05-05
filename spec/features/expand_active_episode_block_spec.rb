require 'rails_helper'

feature 'User can view a list of all episodes and watch most interesting.', %q(
"In order to find most interesting episode
 I'd like to be able to see list of all episodes and watch most interesting"
) do
  let!(:section) { create(:section) }
  let!(:episodes) { create_list(:episode, 2, section: section) }

  before { visit root_path }

  it 'visit the main page for looking a first episode', js: true do
    expect(page).to have_content episodes.first.title
  end

  it 'visit the main page for looking a last episode', js: true do
    expect(page).to have_content episodes.last.title
  end

  it 'expand and watch first episode', js: true do
    all('a.cta-btn').first.click
    expect(page).to have_css('iframe')
  end
end
