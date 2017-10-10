import React, { Component } from 'react'
import { connect } from 'react-redux'
import NavBar from '../NavBar'
import PointsOverview from './PointsOverview'
import HowToGetRewards from './HowToGetRewards'
import EarnMorePoints from './EarnMorePoints'
import data from './rewardsData'
import './pointsOverview.css'

class Rewards extends Component {
    render () {
  return (
    <div>
      <NavBar />
      <PointsOverview /><hr className="lines"/>
      <HowToGetRewards/><hr className="lines"/>
      <EarnMorePoints section={data.earnPointsLinks.pregnancy}/>
    </div>
  )
}}

export default connect(state => state)(Rewards)
