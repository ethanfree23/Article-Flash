class FlashCard < ApplicationRecord
  belongs_to :flash_set

  validates :word, presence: true
  validates :word, length: {in: 2..99}
  validates :meaning, presence: true
  validates :meaning, length: {in: 2..299}
end
