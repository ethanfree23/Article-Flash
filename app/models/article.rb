class Article < ApplicationRecord
    has_many :article_cards
    has_many :flash_cards, through: :article_cards
    

    validates :title, presence: true
    validates :author, presence: true
    validates :content, presence: true
end
