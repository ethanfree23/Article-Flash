class FlashSetSerializer < ActiveModel::Serializer
  attributes :id, :name
  belongs_to :user
  has_many :flash_cards
end
