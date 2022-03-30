class CreateFlashSets < ActiveRecord::Migration[7.0]
  def change
    create_table :flash_sets do |t|
      t.string :name
      # t.belongs_to :user, null: true, foreign_key: true
      # t.references :user


      t.timestamps
    end
  end
end
