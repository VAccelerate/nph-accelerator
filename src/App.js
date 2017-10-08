import React, { Component } from 'react'
import './App.css'
import { Route } from 'react-router'

import LandingPage from './components/LandingPage/LandingPage.js'
import Register from './components/Register/Register'
import Home from './components/Home'

import Rewards from './components/Rewards'
import Reward from './components/RewardCards/Reward'
import RewardsView from './components/RewardsView'


class App extends Component {
  render() {
    return (
      <div className="App">
        <Route exact path='/' component={LandingPage} />
        <Route exact path='/register' component={Register} />
        <Route exact path='/home' component={Home} />
        <Route exact path='/rewards' component={Rewards} />
        <Route exact path='/rewards/view' component={RewardsView} />
        <Route exact path='/rewards/view/:id' component={Reward} />
      </div>
    );
  }
}

export default App
