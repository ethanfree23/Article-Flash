require 'rails_helper'

RSpec.describe FlashCard, type: :model do
  let(:flash_set) { FlashSet.create(id: 1, name: 'exampleName') }

  describe 'creation' do
    it 'can be created' do
      flash_card = FlashCard.create(word: "testWord", meaning: "testMeaning", flash_set_id: flashset.id)

      expect(flash_card).to be_valid
    end
  end
end
