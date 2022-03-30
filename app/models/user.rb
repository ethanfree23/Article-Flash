class User < ApplicationRecord
    has_many :flash_sets, dependent: :destroy
    has_many :flash_cards, through: :flash_sets
    has_many :articles, through: :flash_sets
    
    has_secure_password
    
    validates :username, presence: true, uniqueness: true
    validates :email, presence: true, uniqueness: true
    
    def reset_password!(password)
        self.password = password
        save!
    end
end
