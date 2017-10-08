import React, { Component } from 'react'
import './App.css'
import { Route, BrowserRouter } from 'react-router'

import LandingPage from './components/LandingPage/LandingPage.js'
import Register from './components/Register/Register'
import Home from './components/Home'

import Rewards from './components/Rewards'
import RewardsView from './components/RewardsView'
import RewardClaimed from './components/RewardClaimed'



class App extends Component {
  render() {
    return (
      <div className="App">
        <div className='content'>
          <Route exact path='/' component={LandingPage} />
          <Route exact path='/register' component={Register} />
          <Route exact path='/home' component={Home} />
          <Route exact path='/rewards' component={Rewards} />
          <Route exact path='/rewards/view' component={RewardsView} />
          <Route exact path='/rewards/view/:id/:serial' component={RewardClaimed} />
        </div>
      </div>
    )
  }
}

export default App
