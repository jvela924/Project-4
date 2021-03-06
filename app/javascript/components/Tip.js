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
        <button onClick={() => {this.props.handleView('seeMore', this.props.tip)}} className="tip-button">See More</button>
        <button onClick={() => {this.props.handleView('editTip', this.props.tip)}} className="tip-button">Edit</button>
        <button onClick={() => {this.props.handleDelete(this.props.tip.id)}} className="tip-button">Delete</button>
      </tr>
      </React.Fragment>
    )
  }
}

export default Tip
