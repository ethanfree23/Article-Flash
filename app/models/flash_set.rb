class FlashSet < ApplicationRecord
  belongs_to :user
  has_many :flash_cards, dependent: :destroy
  has_many :articles, through: :flash_cards

  validates :name, presence: true
  validates :name, length: { minimum: 2}
  validates :name, length: { maximum: 99}

  
end
