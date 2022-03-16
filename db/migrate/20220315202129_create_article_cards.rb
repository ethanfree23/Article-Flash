class CreateArticleCards < ActiveRecord::Migration[7.0]
  def change
    create_table :article_cards do |t|
      t.belongs_to :article, null: false, foreign_key: true
      # t.belongs_to :flash_card, null: false, foreign_key: true

      t.timestamps
    end
  end
end
