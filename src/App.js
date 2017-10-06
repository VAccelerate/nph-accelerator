import React, { Component } from 'react'
import './App.css'
import { Route } from 'react-router'

import LandingPage from './components/LandingPage/LandingPage.js'
import Register from './components/Register/Register'
import Home from './components/Home'
import RewardsView from './components/RewardsView'
import Offers from './components/Offers'
import RewardClaimed from './components/RewardClaimed'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route exact path='/' component={LandingPage} />
        <Route path='/register' component={Register} />
        <Route path='/home' component={Home} />
        <Route path='/rewards/:id/:serial' component={RewardClaimed} />
        <Route path='/rewards/view' component={RewardsView} />
        <Route path='/offers' component={Offers} />
      </div>
    )
  }
}

export default App
