class ArticleSerializer < ActiveModel::Serializer
  attributes :id, :title, :content, :author
end
