class CreateFlashCards < ActiveRecord::Migration[7.0]
  def change
    create_table :flash_cards do |t|
      t.string :word
      t.string :meaning
      t.belongs_to :flash_set, null: false, foreign_key: true

      t.timestamps
    end
  end
end
