require 'capybara/rspec'
require 'capybara-screenshot/rspec'

module ScreenshotHelper
  Capybara.save_path = "#{::Rails.root}/tmp/capybara/screenshots/"
  Capybara::Screenshot.prune_strategy = { keep: 4 }
  Capybara::Screenshot.after_save_screenshot do |path|
    `xdg-open #{path}`
  end
end
