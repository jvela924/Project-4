import React from 'react'

class Form extends React.Component {
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
  handleChange = (e) => {
    this.setState({[e.target.id] : e.target.value})
  }
  handleSubmit = (e) => {
    e.preventDefault()
    if(this.props.view.page === 'addTip') {
      this.props.handleCreate(this.state)
    } else if(this.props.view.page === 'editTip') {
      this.props.handleUpdate(this.state)
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
      <div className="form">
        <form onSubmit={this.handleSubmit}>
        {this.props.view.page === 'addTip' ? <h1 className="form-title">Enter Your Bet</h1> : <h1 className="form-title">Update Your Bet</h1>}
          <div className ="form-flex">
            <div className="form-div">
              <label>
              Your Name:
              <input type="text" id="person" value={this.state.person} onChange={this.handleChange} />
              </label>
            </div>
            <div className="form-div">
              <label>
              Side Bet:
              <input type="text" id="sidebet" value={this.state.sidebet} onChange={this.handleChange} />
              </label>
            </div>
            <div className="form-div">
              <label>
              Spread:
              <input type="number" id="spread" value={this.state.spread} onChange={this.handleChange} />
              </label>
            </div>
            <div className="form-div">
              <label>
              Amount Wagered:
              <input type="number" id="wager" value={this.state.wager} onChange={this.handleChange} />
              </label>
            </div>
            <div className="form-div">
              <label>
              Opponent:
              <input type="text" id="opponent" value={this.state.opponent} onChange={this.handleChange} />
              </label>
            </div>
            <div className="form-div">
              <label>
              Home Team:
              <input type="text" id="hometeam" value={this.state.hometeam} onChange={this.handleChange} />
              </label>
            </div>
            <div className="form-div">
              <label>
              Odds:
              <input type="number" id="odds" value={this.state.odds} onChange={this.handleChange} />
              </label>
            </div>
            <div className="form-div">
              <label>
              Rationale:
              <input type="text" id="rationale" value={this.state.rationale} onChange={this.handleChange} />
              </label>
            </div>
            {this.props.view.page === 'addTip' ? <input className="submit" type="submit" value="Add"/> : <input className="submit" type="submit" value="Update"/>}
          </div>
        </form>
      </div>
    )
  }
}

export default Form
