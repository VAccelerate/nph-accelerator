import React, { Component } from 'react'
import './App.css'
import 'font-awesome/css/font-awesome.css'
import { Route, BrowserRouter } from 'react-router'

import LandingPage from './components/LandingPage/LandingPage.js'
import Register from './components/Register/Register'
import Home from './components/Home'

import Rewards from './components/Rewards'
import Reward from './components/RewardCards/Reward'
import RewardsView from './components/RewardsView'
import RewardClaimed from './components/RewardClaimed'
import Calendar from './components/Calendar'



class App extends Component {
  render() {
    return (
      <div className="App">
        <Route exact path='/' component={LandingPage} />
        <Route exact path='/register' component={Register} />
        <Route exact path='/home' component={Home} />
        <Route exact path='/points' component={Rewards} />
        <Route exact path='/rewards' component={RewardsView} />
        <Route exact path='/rewards/:id' component={Reward} />
        <Route exact path='/rewards/:id/:serial' component={RewardClaimed} />
        <Route exact path='/calendar' component={Calendar} />
      </div>
    )
  }
}

export default App
