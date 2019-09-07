import React from 'react'

import Header from './Header.js'
import Main from './Main.js'
import Score from './Score.js'

class App extends React.Component {
    // ======================================  State
    constructor(props) {
        super(props)
        this.state = {
            view: {
                page: 'home',
                pageTitle: 'Bets Overview'
            },
            formInputs: {
                id: null,
                person: null,
                sidebet: null,
                opponent: null,
                hometeam: null,
                spread: null,
                odds: null,
                wager: null,
                rationale: null
            }
        }
    }

    // ======================================  Handlers
    // Set the pageTitle and formInputs based on the view
    handleView = (view, tipData) => {
        // Set variables to empty values
        let pageTitle = ''
        let formInputs = {
            id: null,
            person: '',
            sidebet: '',
            opponent: '',
            hometeam: '',
            spread: null,
            odds: null,
            wager: null,
            rationale: ''
        }
        // Switch case to set the pageTitle based on the view
        switch (view) {
            case 'home':
                pageTitle = 'Bets Overview'
                break
            case 'seeMore':
                pageTitle = 'Bet Detail'
                break
            case 'addTip':
                pageTitle = 'Add a Bet'
                break
            case 'editTip':
                pageTitle = 'Edit a Bet'
                formInputs = {
                    id: tipData.id,
                    person: tipData.person,
                    sidebet: tipData.sidebet,
                    opponent: tipData.opponent,
                    hometeam: tipData.hometeam,
                    spread: tipData.spread,
                    odds: tipData.odds,
                    wager: tipData.wager,
                    rationale: tipData.rationale
                }
                break
            default:
                break
        }
        // update the state
        this.setState({
            view: {
                page: view,
                pageTitle: pageTitle
            },
            formInputs: formInputs
        })
    }


    // ======================================  Render
  render () {
    return (
      <div>
        <div>
          <Header handleView={this.handleView} />
        </div>
        <div className="main-container">
          <Main
          view={this.state.view}
          formInputs={this.state.formInputs}
          handleView={this.handleView}
           />
          <Score />
        </div>
      </div>
    )
  }
}

// ==========================================  Export
export default App
