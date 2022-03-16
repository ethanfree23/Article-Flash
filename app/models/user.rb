class User < ApplicationRecord
    has_many :flash_sets, dependent: :destroy
    has_many :flash_cards, through: :flash_sets

    validates :username, presence: true
    validates :password, presence: true
    validates :email, presence: true
    validates :first_name, presence: true
end
