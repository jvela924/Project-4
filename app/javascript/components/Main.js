import React from 'react'

import Tip from './Tip.js'
import Form from './Form.js'
import More from './More.js'

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
      body: JSON.stringify(createData),
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
        prevState.tips.unshift(jsonedTip)
        return { tips: prevState.tips }
      })
    })
    .catch(err => alert("Must fill out all form fields"))
  }
  handleUpdate = (updateData) => {
    fetch(`/tips/${updateData.id}`, {
      body: JSON.stringify(updateData),
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
    fetch(`/tips/${id}`, {
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
      {this.props.view.page === 'home'
      ?
      <table>
      <tr>
        <th>User</th>
        <th>Bet on</th>
        <th className="spread">Spread</th>
        <th className="spread">Amount Wagered</th>
        <th className="small"></th>
      </tr>
        {this.state.tips.map ((tip) => (
            <Tip
              key={tip.id}
              tip={tip}
              handleView={this.props.handleView}
              handleDelete={this.handleDelete}
              handleShow={this.handleShow}
            />
    ))}
    </table>
    : this.props.view.page === 'editTip' || this.props.view.page === 'addTip' ? <Form
      handleCreate={this.handleCreate}
      handleUpdate={this.handleUpdate}
      formInputs={this.props.formInputs}
      view={this.props.view}
      />
      : <More formInputs={this.props.formInputs} view={this.props.view} />}
    </div>
    )
  }
}

export default Main
