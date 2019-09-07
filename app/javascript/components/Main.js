import React from 'react'

import Tip from './Tip.js'

class Main extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      tips: []
    }
  }
  fetchTips = () => {
    fetch('/tips')
    .then(data => data.json())
    .then(jData => {
      this.setState({ tips: jData })
    })
  }
  componentDidMount() {
    this.fetchTips()
  }
  render () {
    return (
      <div className = "main">
      <table>
        <tr>
          <th>User</th>
          <th>Bet on</th>
          <th className="spread">Spread</th>
          <th className="spread">Amount Wagered</th>
        </tr>
        {this.state.tips.map ((tip, index) => {
          return(
            <Tip tip={tip} key={index} />
         )
       })}
        </table>
      </div>
    )
  }
}

export default Main
