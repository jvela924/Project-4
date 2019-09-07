import React from 'react'

class GameList extends React.Component {
    render () {
        return (
            <div>
                {this.props.events.map((game) => (
                    <div key={game.id}>
                        <h3 key={game.competitions[0].competitors[1].team.name}>
                            {game.competitions[0].competitors[1].team.name} : {game.competitions[0].competitors[1].score}&nbsp;
                            @ &nbsp;{game.competitions[0].competitors[0].team.name} : {game.competitions[0].competitors[0].score}
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




export default GameList
