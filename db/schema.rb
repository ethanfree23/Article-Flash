# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema[7.0].define(version: 2022_03_30_212315) do
  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "article_cards", force: :cascade do |t|
    t.bigint "article_id"
    t.bigint "flash_card_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["article_id"], name: "index_article_cards_on_article_id"
    t.index ["flash_card_id"], name: "index_article_cards_on_flash_card_id"
  end

  create_table "articles", force: :cascade do |t|
    t.string "title"
    t.string "content"
    t.string "author"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "flash_cards", force: :cascade do |t|
    t.string "word"
    t.string "meaning"
    t.bigint "flash_set_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["flash_set_id"], name: "index_flash_cards_on_flash_set_id"
  end

  create_table "flash_sets", force: :cascade do |t|
    t.string "name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "users", force: :cascade do |t|
    t.string "username"
    t.string "password_digest"
    t.string "address"
    t.string "email"
    t.string "phone"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

end
