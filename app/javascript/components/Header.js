import React from 'react'

class Header extends React.Component {
  render () {
    return (
      <div className="header">
        <div>
          <h1 className="title">
          BetShare
          </h1>
          <div className="header-flex">
            <button className="header-button" onClick={() => {this.props.handleView('home')}}>Home</button>
            <button onClick={() => {this.props.handleView('addTip')}} className="header-button">Share Your Bets</button>
          </div>
        </div>
        <div>
          <img className="title-image" src="http://sportsthenandnow.com/wp/wp-content/uploads/2018/06/sports-betting-2018.jpg" alt="sports betting" />
        </div>
      </div>
    )
  }
}

export default Header
