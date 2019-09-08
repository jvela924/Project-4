import React from 'react'

class More extends React.Component {
  constructor() {
    super()
    this.state = {
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
  }
  componentDidMount() {
    this.setState({
      id: this.props.formInputs.id,
      person: this.props.formInputs.person,
      sidebet: this.props.formInputs.sidebet,
      opponent: this.props.formInputs.opponent,
      hometeam: this.props.formInputs.hometeam,
      spread: this.props.formInputs.spread,
      odds: this.props.formInputs.odds,
      wager: this.props.formInputs.wager,
      rationale: this.props.formInputs.rationale
    })
  }
  render () {
    return (
      <div className="details">
        <div className="form">
          <h1 className="form-title">Tip Details</h1>
            <div className ="detail-flex">
              <div className="detail-div">
                <label>
                Person:
                <h3 className="tip-detail">{this.state.person}</h3>
                </label>
              </div>
              <div className="detail-div">
                <label>
                Side Bet:
                <h3 className="tip-detail">{this.state.sidebet}</h3>
                </label>
              </div>
              <div className="detail-div">
                <label>
                Spread:
                <h3 className="tip-detail">{this.state.spread}</h3>
                </label>
              </div>
              <div className="detail-div">
                <label>
                Amount Wagered:
                <h3 className="tip-detail">{this.state.wager}</h3>
                </label>
              </div>
              <div className="detail-div">
                <label>
                Opponent:
                <h3 className="tip-detail">{this.state.opponent}</h3>
                </label>
              </div>
              <div className="detail-div">
                <label>
                Home Team:
                <h3 className="tip-detail">{this.state.hometeam}</h3>
                </label>
              </div>
              <div className="detail-div">
                <label>
                Odds:
                <h3 className="tip-detail">{this.state.odds}</h3>
                </label>
              </div>
              <div className="detail-div">
                <label>
                Rationale:
                <h3 className="tip-detail">{this.state.rationale}</h3>
                </label>
              </div>
            </div>
        </div>
      </div>
    )
  }
}

export default More
