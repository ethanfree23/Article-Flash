class ArticleCard < ApplicationRecord
  belongs_to :article
  belongs_to :flash_card

  validates :article, presence: true
  validates :flash_card, presence: true
  # validates :
end
