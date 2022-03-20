class FlashCard < ApplicationRecord
  belongs_to :flash_set, optional: true
  has_many :users, through: :flash_set
  has_many :articles, through: :article_cards


  validates :word, presence: true
  validates :word, length: {in: 2..99}
  validates :meaning, presence: true
  validates :meaning, length: {in: 2..299}
end
