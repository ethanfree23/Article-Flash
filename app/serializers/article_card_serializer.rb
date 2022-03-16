class ArticleCardSerializer < ActiveModel::Serializer
  attributes :id
  has_one :article
  has_one :flash_card
end
