import React, { Component } from 'react'
import './App.css'
import 'font-awesome/css/font-awesome.css'
import { Route } from 'react-router'

import LandingPage from './components/LandingPage/LandingPage.js'
import Register from './components/Register/Register'
import Home from './components/Home'

import Rewards from './components/Rewards'
import Reward from './components/RewardCards/Reward'
import RewardsView from './components/RewardsView'
import RewardClaimed from './components/RewardClaimed'
import Calendar from './components/Calendar'
import Challenges from './components/Challenges'
import YourPregnancy from './components/SectionPage/YourPregnancy/'
import SupportAndHelp from './components/SectionPage/SupportAndHelp/'
import BabyAndToddler from './components/SectionPage/BabyAndToddler/'
import ArticlePage from './components/SectionPage/ArticlePage/'
import ChallengesResult from './components/ChallengesResult/'
import PepiOraHelp from './components/SectionPage/PepiOraHelp/'
import RewardsSupport from './components/SectionPage/RewardsSupport/'
import ContactPage from './components/ContactPage/'
import AboutPage from './components/AboutPage/'
import SendToFamily from './components/SendToFamily'

class App extends Component {
  render () {
    return (
      <div className='App'>
        <Route exact path='/' component={LandingPage} />
        <Route exact path='/register' component={Register} />
        <Route exact path='/home' component={Home} />
        <Route exact path='/points' component={Rewards} />
        <Route exact path='/rewards' component={RewardsView} />
        <Route exact path='/rewards/:id' component={Reward} />
        <Route exact path='/rewards/:id/:serial' component={RewardClaimed} />
        <Route exact path='/calendar' component={Calendar} />
        <Route exact path='/your-pregnancy' component={YourPregnancy} />
        <Route exact path='/support-and-help' component={SupportAndHelp} />
        <Route exact path='/baby-and-toddler' component={BabyAndToddler} />
        <Route exact path='/your-pregnancy/:articleId' component={ArticlePage} />
        <Route exact path='/challenges/:sectionId/:articleId/' component={Challenges} />
        <Route exact path='/challenges/:sectionId/:articleId/result' component={ChallengesResult} />
        <Route exact path='/support-and-help/:articleId' component={ArticlePage} />
        <Route exact path='/baby-and-toddler/:articleId' component={ArticlePage} />
        <Route exact path='/pepi-ora-help' component={PepiOraHelp} />
        <Route exact path='/pepi-ora-help/:articleId' component={ArticlePage} />
        <Route exact path='/rewards-support' component={RewardsSupport} />
        <Route exact path='/rewards-support/:articleId' component={ArticlePage} />
        <Route exact path='/contact' component={ContactPage} />
        <Route exact path='/about' component={AboutPage} />
        <Route exact path='/home/send-to-family' component={SendToFamily} />
      </div>
    )
  }
}

export default App
