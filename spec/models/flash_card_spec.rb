require 'rails_helper'

RSpec.describe FlashCard, type: :model do

  describe "relationships" do
    let(:user) { User.create(username: "testUsername", password: "testPassword", email: "testEmail", first_name: "testFirstName", last_name: "testLastName", country: "testCountry") }
    let(:flash_set) { FlashSet.create(name: "test", user_id: user.id) }
    let(:flash_card) { FlashCard.create(word: "testName", meaning: "testMeaning", flash_set_id: flash_set.id) }
    
    it 'can access the associated flash_cards' do      


      # puts flash_card.flash_set.to_json.to_s
      expect(flash_set.flash_cards).to eq(flash_card)
    end
  end

  describe 'creation' do
    let(:flash_set) { FlashSet.create(id: 1, name: 'exampleName') }
    it 'can be created' do
      flash_card = FlashCard.create(word: "testWord", meaning: "testMeaning", flash_set_id: flash_set.id)

      expect(flash_card).to be_valid
    end
  end
end
