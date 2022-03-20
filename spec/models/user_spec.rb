require 'rails_helper'

RSpec.describe User, type: :model do

  describe 'relationships' do
    
    let(:user) { User.create(username: "testUsername", password: "testPassword", email: "testEmail", first_name: "testFirstName", last_name: "testLastName", country: "testCountry") }
    let(:flash_card) { FlashCard.create(word: "testWord", meaning: "testMeaning") }


    it 'can access the associated flash_sets' do
      flash_set = FlashSet.create(user_id: user.id, name: "testName")

      expect(user.flash_sets).to include(flash_set)
    end

  end

  describe 'relationships' do
    let(:user) { User.create(username: "testUsername", password: "testPassword", email: "testEmail", first_name: "testFirstName", last_name: "testLastName", country: "testCountry") }
    let(:article) { Article.create(title: "testArticle", content: "testContent", author: "testAuthor") }

    it 'can access the associated flash_sets' do
      flash_set = FlashSet.create(user_id: user.id, name: "testName")

      expect(user.flash_sets).to include(flash_set)
    end
  end

  describe 'creation' do
    it 'can be created' do
      user = User.create(username: "testUsername", password: "testPassword", email: "testEmail", first_name: "testNameFirst", last_name: "testNameLast", country: "testCountry")
    
      expect(user).to be_valid
    end
  end


  # it "can run tests" do 
  #   expect(false).to be(false)
  # end
end
