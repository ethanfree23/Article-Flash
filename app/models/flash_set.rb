class FlashSet < ApplicationRecord
  belongs_to :user
  has_many :flash_cards, dependent: :destroy

  validates :name, presence: true
  validates :name, length: { minimum: 2}
  validates :name, length: { maximum: 99}
end
