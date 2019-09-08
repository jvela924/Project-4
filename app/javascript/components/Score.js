// =============================================================================
//  SCORE COMPONENT
// =============================================================================

// ======================================  Dependencies
import React from 'react'
import GameList from './GameList.js'

// ======================================  Score Class
class Score extends React.Component {

    // ==================================  Constructor
    constructor(props){
        super(props)
        this.state={
            sportURL: '',
            sportTitle: ''
        }
        this.fetchScores = this.fetchScores.bind(this)
    }

    // ==================================  Fetch Scores
    fetchScores = (sport) => {
        event.preventDefault()
        let sportURL = ''
        let sportTitle = ''
        switch (sport) {
            case 'nfl':
                this.state.sportURL = 'https://site.api.espn.com/apis/site/v2/sports/football/nfl/scoreboard'
                this.state.sportTitle = 'NFL Scores'
                break
            case 'mlb':
                this.state.sportURL = 'https://site.api.espn.com/apis/site/v2/sports/baseball/mlb/scoreboard'
                this.state.sportTitle = 'MLB Scores'
                break
            case 'ncaafb':
                this.state.sportURL = 'https://site.api.espn.com/apis/site/v2/sports/football/college-football/scoreboard'
                this.state.sportTitle = 'NCAA FB Scores'
                break
            default:
                break
        }
        this.setState({
            sportURL: this.state.sportURL,
            sportTitle: this.state.sportTitle
        }, () => {
            fetch(this.state.sportURL)
            .then(response => response.json())
            .then(json => this.setState({
                scores: json
            })
            ), err => console.log(err)
        })
    }

    // ==================================  On Load
    componentDidMount() {
        this.fetchScores('nfl')
    }

    // ==================================  Render
  render () {
    return (
      <div className="score">
        <div className="sport-btn-container">
            <button className="sport-btn" onClick={() => {this.fetchScores('nfl')}}>NFL</button>
            <button className="sport-btn" onClick={() => {this.fetchScores('mlb')}}>MLB</button>
            <button className="sport-btn" onClick={() => {this.fetchScores('ncaafb')}}>NCAA FB</button>
        </div>
        <hr/>
        <h1 className="score-title">{this.state.sportTitle}</h1>
        <hr/>
        {
            (this.state.scores)
            ? <GameList events={this.state.scores.events} />
            : <h2>Games Not Found</h2>
        }
      </div>
    )
  }
}

// ======================================  Export
export default Score
