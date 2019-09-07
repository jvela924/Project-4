import React from 'react'

class Tip extends React.Component {
  render () {
    return (
      <React.Fragment>
      <tr>
        <td className="sidebet">{this.props.tip.person}</td>
        <td className="sidebet">{this.props.tip.sidebet}</td>
        <td className="spread">{this.props.tip.spread}</td>
        <td className="spread">${this.props.tip.wager}</td>
        <button className="tip-button">See More</button>
        <button className="tip-button">Edit</button>
        <button className="tip-button">Delete</button>
      </tr>
      </React.Fragment>
    )
  }
}

export default Tip
