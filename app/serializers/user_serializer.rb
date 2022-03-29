class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :password, :email, :first_name, :last_name, :country
  has_many :flash_sets
end
