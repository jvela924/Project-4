import React from 'react'

class Tip extends React.Component {
  render () {
    return (
      <React.Fragment>
      <tr>
        <td>{this.props.tip.person}</td>
        <td>{this.props.tip.sidebet}</td>
        <td>{this.props.tip.spread}</td>
        <td>{this.props.tip.wager}</td>
        <button className="tip-button">See More</button>
        <button className="tip-button">Edit</button>
        <button className="tip-button">Delete</button>
      </tr>
      </React.Fragment>
    )
  }
}

export default Tip
