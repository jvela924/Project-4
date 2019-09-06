class Tip
    if(ENV['DATABASE_URL'])
        uri = URI.parse(ENV['DATABASE_URL'])
        DB = PG.connect(uri.hostname, uri.port, nil, nil, uri.path[1..-1], uri.user, uri.password)
    else
        DB = PG.connect(host: "localhost", port: 5432, dbname: 'project_four_development')
    end

# ==============================================================================
#  ROUTES
# ==============================================================================

    # ======================================  Index
    def self.all
        results = DB.exec("SELECT * FROM tips ORDER BY id ASC;")
        return results.map do |result|
            {
                "id" => result["id"].to_i,
                "person" => result["person"],
                "sidebet" => result["sidebet"],
                "opponent" => result["opponent"],
                "hometeam" => result["hometeam"],
                "spread" => result["spread"].to_f,
                "odds" => result["odds"].to_f,
                "wager" => result["wager"].to_f,
                "rationale" => result["rationale"]
            }
        end
    end


    # ======================================  Show
    def self.find(id)
        results = DB.exec("SELECT * FROM tips WHERE id = #{id};")
        return {
            "id" => results.first["id"].to_i,
            "person" => results.first["person"],
            "sidebet" => results.first["sidebet"],
            "opponent" => results.first["opponent"],
            "hometeam" => results.first["hometeam"],
            "spread" => results.first["spread"].to_f,
            "odds" => results.first["odds"].to_f,
            "wager" => results.first["wager"].to_f,
            "rationale" => results.first["rationale"]
        }
    end


    # ======================================  Create
    def self.create(opts)
        # puts opts
        results = DB.exec(
            <<-SQL
                INSERT INTO tips (person, sidebet, opponent, hometeam, spread, odds, wager, rationale)
                VALUES ('#{opts["person"]}',
                        '#{opts["sidebet"]}',
                        '#{opts["opponent"]}',
                        '#{opts["hometeam"]}',
                        #{opts["spread"]},
                        #{opts["odds"]},
                        #{opts["wager"]},
                        '#{opts["rationale"]}'
                    )
                RETURNING
                    id, person, sidebet, opponent, hometeam,
                        spread, odds, wager, rationale;
            SQL
        )
        return {
            "id" => results.first["id"].to_i,
            "person" => results.first["person"],
            "sidebet" => results.first["sidebet"],
            "opponent" => results.first["opponent"],
            "hometeam" => results.first["hometeam"],
            "spread" => results.first["spread"].to_f,
            "odds" => results.first["odds"].to_f,
            "wager" => results.first["wager"].to_f,
            "rationale" => results.first["rationale"]
        }
    end

    # ======================================  Update
    def self.update(id, opts)
        results = DB.exec(
            <<-SQL
                UPDATE tips
                SET
                    person='#{opts["person"]}',
                    sidebet='#{opts["sidebet"]}',
                    opponent='#{opts["opponent"]}',
                    hometeam='#{opts["hometeam"]}',
                    spread=#{opts["spread"]},
                    odds=#{opts["odds"]},
                    wager=#{opts["wager"]},
                    rationale='#{opts["rationale"]}'
                WHERE id=#{id}
                RETURNING
                    id, person, sidebet, opponent, hometeam,
                        spread, odds, wager, rationale;
            SQL
        )
        return {
            "id" => results.first["id"].to_i,
            "person" => results.first["person"],
            "sidebet" => results.first["sidebet"],
            "opponent" => results.first["opponent"],
            "hometeam" => results.first["hometeam"],
            "spread" => results.first["spread"].to_f,
            "odds" => results.first["odds"].to_f,
            "wager" => results.first["wager"].to_f,
            "rationale" => results.first["rationale"]
        }
    end


    # ======================================  Delete
    def self.delete(id)
        results = DB.exec("DELETE FROM tips WHERE id=#{id};")
        return { "deleted" => true}
    end


end   # end of Tip class
