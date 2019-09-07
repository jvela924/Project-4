# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Tip.create({
    "person" => "Homer Simpson",
    "sidebet" => "Washington Generals",
    "opponent" => "Harlem Globetrotters",
    "hometeam" => "Harlem Globetrotters",
    "spread" => -10.5,
    "odds" => -110,
    "wager" => 5.00,
    "rationale" => "Nice uniforms"
})
Tip.create({
    "person" => "Peter Griffen",
    "sidebet" => "New England Patriots",
    "opponent" => "Los Angeles Rams",
    "hometeam" => "New England Patriots",
    "spread" => -7,
    "odds" => +140,
    "wager" => 10000.00,
    "rationale" => "Gronk!"
})
