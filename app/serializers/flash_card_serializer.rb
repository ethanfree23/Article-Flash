class FlashCardSerializer < ActiveModel::Serializer
  attributes :id, :word, :meaning
  belongs_to :flash_set
end
