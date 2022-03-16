class FlashCardSerializer < ActiveModel::Serializer
  attributes :id, :word, :meaning
  has_one :flash_set
end
