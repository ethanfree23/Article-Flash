require 'rails_helper'

RSpec.describe FlashSet, type: :model do

  describe "relationships" do
    let(:user) { User.create(username: "testUsername", password: "testPassword", email: "testEmail", first_name: "testFirstName", last_name: "testLastName", country: "testCountry") }
    let(:flash_set) { FlashSet.create(name: "test", user_id: user.id) }
    let(:flash_card) { FlashCard.create(word: "testName", meaning: "testMeaning", flash_set_id: flash_set.id) }

    it 'can access the associated flash_sets' do      

      # puts flash_card.flash_set.to_json.to_s
      expect(flash_card.flash_set).to eq(flash_set)
    end
  end
  
  # describe 'relationships' do
  #   let(:flash_set) { FlashSet.create(name: 'flash_set') }
  #   let(:article) { Article.create(title: "test", content: 'test', author: 'test') }

  #   it 'can access the associated flash_cards' do
  #     flash_card = FlashCard.create(id: 1, word: "testWord", meaning: "testMeaning", flash_set_id: flash_set.id)

  #     expect(flash_set.flash_cards).to include(flash_card)
  #   end

  # end

  describe 'creation' do
    let(:user) { User.create(username: "testUsername", password: "testPassword", email: "testEmail", first_name: "testFirstName", last_name: "testLastName", country: "testCountry") }

    it 'can be created' do
      flash_set = FlashSet.create(name: 'test', user_id: user.id)
    
      expect(flash_set).to be_valid
    end
  end
end
