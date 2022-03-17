require 'rails_helper'

RSpec.describe FlashSet, type: :model do
  let(:user) { User.create(id: 1, username: 'user', password: 'password', email: 'user@example.com', first_name: 'first', last_name: 'last', country: 'country')}

  describe 'creation' do
    it 'can be created' do
      flash_set = FlashSet.create(name: 'test', user_id: user.id)
    
      expect(flash_set).to be_valid
    end
  end
end
