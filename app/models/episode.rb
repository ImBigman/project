class Episode < ApplicationRecord
  belongs_to :section

  validates :title, :url, :thumbs, presence: true
end
