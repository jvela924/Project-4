import React from 'react'

class Tip extends React.Component {
  render () {
    return (
      <div className="tip">
        <h2>{this.props.tip.person}</h2>
        <h2>{this.props.tip.sidebet}</h2>
        <h2>{this.props.tip.spread}</h2>
        <h2>{this.props.tip.wager}</h2>
      </div>
    )
  }
}

export default Tip
