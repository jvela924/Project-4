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
    "spread" => +10.5,
    "odds" => -110,
    "wager" => 5.00,
    "rationale" => "Nice uniforms"
})
Tip.create({
    "person" => "Peter Griffin",
    "sidebet" => "New England Patriots",
    "opponent" => "Los Angeles Rams",
    "hometeam" => "New England Patriots",
    "spread" => -7,
    "odds" => +140,
    "wager" => 10000.00,
    "rationale" => "My pal, Tom Brady!"
})
Tip.create({
    "person" => "Betty Wagerton",
    "sidebet" => "St Louis Cardinals",
    "opponent" => "Chicago Cubs",
    "hometeam" => "Chicago Cubs",
    "spread" => +2,
    "odds" => -110,
    "wager" => 10,
    "rationale" => "Paul Goldschmidt will light up Cubs pitching"
})
Tip.create({
    "person" => "Zen There Dunn That",
    "sidebet" => "Clemson",
    "opponent" => "Texas A & M",
    "hometeam" => "Clemson",
    "spread" => -17.5,
    "odds" => +110,
    "wager" => 25.00,
    "rationale" => "Etienne will run wild on A & Ms defense"
})
Tip.create({
    "person" => "Noe Stradamus",
    "sidebet" => "Las Vegas Golden Knights",
    "opponent" => "San Jose Sharks",
    "hometeam" => "San Jose Sharks",
    "spread" => +1.5,
    "odds" => +130,
    "wager" => 5.00,
    "rationale" => "The quatraine says so"
})
Tip.create({
    "person" => "M. Puhrer",
    "sidebet" => "Manchester United",
    "opponent" => "Chelsea",
    "hometeam" => "Chelsea",
    "spread" => -2.5,
    "odds" => +170,
    "wager" => 75.00,
    "rationale" => "I have foreseen it"
})
Tip.create({
    "person" => "Solenya",
    "sidebet" => "Jaguar",
    "opponent" => "Concerto",
    "hometeam" => "Concerto",
    "spread" => +1,
    "odds" => -150,
    "wager" => 100.00,
    "rationale" => "Im Pickle Rick!"
})
Tip.create({
    "person" => "Nehi",
    "sidebet" => "Chicago White Sox",
    "opponent" => "Detroit Tigers",
    "hometeam" => "Chicago White Sox",
    "spread" => -3.5,
    "odds" => -110,
    "wager" => 100.00,
    "rationale" => "The Tigers have the worst record in the MLB"
})
Tip.create({
    "person" => "Capt Jack",
    "sidebet" => "Kansas City Chiefs",
    "opponent" => "Las Vegas Raiders",
    "hometeam" => "Oakland Raiders",
    "spread" => +7,
    "odds" => +140,
    "wager" => 10000.00,
    "rationale" => "Hard knocks dont stop"
})
Tip.create({
    "person" => "Wyld Stallyns",
    "sidebet" => "Chicago Bears",
    "opponent" => "Denver Broncos",
    "hometeam" => "Denver Broncos",
    "spread" => -4.5,
    "odds" => -120,
    "wager" => 1.00,
    "rationale" => "Da Bears took da preseaon off and it shows"
})
