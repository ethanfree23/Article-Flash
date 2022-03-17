class CreateFlashCards < ActiveRecord::Migration[7.0]
  def change
    create_table :flash_cards do |t|
      t.string :word
      t.string :meaning
      t.references :flash_set

      t.timestamps
    end
  end
end
