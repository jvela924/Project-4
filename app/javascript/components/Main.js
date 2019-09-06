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
        <div className="tips">
            {this.state.tips.map ((tip, index) => {
              return(
                <Tip tip={tip} key={index} />
           )
         })}
        </div>
      </div>
    )
  }
}

export default Main
