# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

puts "Seeding Users..."
User.create(username: "Ethanfree23", password: "Audirsq8$!", email: "ethanfree23@gmail.com", first_name: "Ethan", last_name: "Freeman", country: "USA")
User.create(username: "Test", password: "test", email: "test@gmail.com", first_name: "test", last_name: "test", country: "test")

puts "Seeding Flash_sets..."
FlashSet.create(name: "Common spanish verbs")
FlashSet.create(name: "Common Spanish prepositions")
FlashSet.create(name: "Common French prepositions")

puts "Seeding Flash_cards..."
FlashCard.create(word: "hacer", meaning: "to do")
FlashCard.create(word: "vivir", meaning: "to live")
FlashCard.create(word: "conocer", meaning: "to know")

puts "Seeding Articles..."
Article.create(title: "Como hacer algo nuevo", content: "Para llevar una identidad nuevo, necessitas una plan de \"hacer\".", author: "Jorge Gonzalez")
