import React from 'react'

import Header from './Header.js'
import Main from './Main.js'

class App extends React.Component {
  render () {
    return (
      <div>
        <div>
          <Header />
        </div>
        <div className="main-container">
          <Main />
        </div>
      </div>
    )
  }
}

export default App
