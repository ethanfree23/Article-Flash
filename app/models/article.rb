class Article < ApplicationRecord
    has_many :article_cards

    validates :title, presence: true
    validates :author, presence: true
    validates :content, presence: true
end
