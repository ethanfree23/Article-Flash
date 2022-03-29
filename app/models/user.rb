class User < ApplicationRecord
    has_many :flash_sets, dependent: :destroy
    has_many :flash_cards, through: :flash_sets
    has_many :articles, through: :flash_sets

    validates :username, presence: true, uniqueness: true
    validates :password, presence: true
    validates :email, presence: true, uniqueness: true
    validates :first_name, presence: true
end
