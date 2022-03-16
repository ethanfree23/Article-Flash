class ArticleCard < ApplicationRecord
  belongs_to :article
  belongs_to :flash_card
end
