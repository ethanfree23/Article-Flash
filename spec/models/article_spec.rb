require 'rails_helper'

RSpec.describe Article, type: :model do
  describe 'creation' do
    it 'can be created' do
      article = Article.create(title: "testTitle", content: "testContent", author: "testAuthor")

      expect(article).to be_valid
    end
  end
end
