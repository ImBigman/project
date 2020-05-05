class Section < ApplicationRecord
  has_many :episodes, dependent: :destroy

  validates :title, :description, presence: true
end
