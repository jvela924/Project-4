import React from 'react'
import GameList from './GameList.js'

class Score extends React.Component {
    constructor(props){
        super(props)
        this.state={
            nflURL: 'http://site.api.espn.com/apis/site/v2/sports/football/nfl/scoreboard',
            mlbURL: 'http://site.api.espn.com/apis/site/v2/sports/baseball/mlb/scoreboard'
        }
        this.fetchNFLScores = this.fetchNFLScores.bind(this)
        this.fetchMLBScores = this.fetchMLBScores.bind(this)
    }


    fetchNFLScores = (events) => {
        event.preventDefault()
        this.setState({
            nflURL: this.state.nflURL
        }, () => {
            fetch(this.state.nflURL)
            .then(response => response.json())
            .then(json => this.setState({
                nflScores: json
            })
            ), err => console.log(err)
        })

    }

    fetchMLBScores = (events) => {
        event.preventDefault()
        this.setState({
            mlbURL: this.state.mlbURL
        }, () => {
            fetch(this.state.mlbURL)
            .then(response => response.json())
            .then(json => this.setState({
                mlbScores: json
            })
            ), err => console.log(err)
        })

    }

    componentDidMount() {
        this.fetchNFLScores()
        this.fetchMLBScores()
    }


  render () {
    return (
      <div className="score">
        <hr/>
        <h1>NFL Games</h1>
        {
            (this.state.nflScores)
            ? <GameList events={this.state.nflScores.events} />
            : <h2>Games Not Found</h2>
        }

        <hr/>
        <h1>MLB Games</h1>
        {
            (this.state.mlbScores)
            ? <GameList events={this.state.mlbScores.events} />
            : <h2>Games Not Found</h2>
        }

      </div>
    )
  }
}





export default Score
