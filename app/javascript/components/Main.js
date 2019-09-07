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
  handleCreate = (createData) => {
    fetch('/tips', {
      body: JSON.stringify(createDate),
      method: 'POST',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      }
    })
    .then(createdTip => {
      return createdTip.json()
    })
    .then(jsonedTip => {
      this.props.handleView('home')
      this.setState(prevState => {
        prevState.tips.push(jsonedTip)
        return { tips: prevState.tips }
      })
    })
    .catch(err => console.log(err))
  }
  handleUpdate = (updateData) => {
    fetch('/tips/${updateData.id}', {
      body: JSON.stringify(updateDate),
      method: 'PUT',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      }
    })
    .then(updatedTip => {
      this.props.handleView('home')
      this.fetchTips()
    })
    .catch(err => console.log(err))
  }
  handleDelete = (id) => {
    fetch('/tips/${id}', {
      method: 'DELETE',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      }
    })
    .then(data => {
      this.setState(prevState => {
        const tips = prevState.tips.filter( tip => tip.id !== id)
        return { tips }
      })
    })
    .catch(err => console.log(err))
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
        <th className="small"></th>
      </tr>
        {this.state.tips.map ((tip, index) => {
          return(
            <Tip
              tip={tip}
              key={index}
              handleView={this.props.handleView}
              handleDelete={this.handleDelete}
            />
         )
       })}
      </table>
      </div>
    )
  }
}

export default Main
