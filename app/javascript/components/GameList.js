// =============================================================================
//  GAMELIST COMPONENT
// =============================================================================

// ======================================  Dependencies
import React from 'react'

// ======================================  GameList Class
class GameList extends React.Component {

    // ==================================  Render
    render () {
        return (
            <div>
                {this.props.events.map((game) => (
                    <div key={game.id}>
                        <h3 key={game.competitions[0].competitors[1].team.name}>
                            {game.competitions[0].competitors[1].team.displayName} : {game.competitions[0].competitors[1].score}&nbsp;
                        </h3>
                        <h3 key={game.competitions[0].competitors[0].team.name}>
                            @ &nbsp;{game.competitions[0].competitors[0].team.displayName} : {game.competitions[0].competitors[0].score}
                        </h3>
                        <h4 key={game.name}>
                            Status : {game.status.type.detail}
                        </h4>
                        <hr/>
                    </div>
                ))}
            </div>
        )
    }
}

// ======================================  Export
export default GameList
