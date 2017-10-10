import React, { Component } from 'react'
import { connect } from 'react-redux'
import NavBar from '../NavBar'
import PointsOverview from './PointsOverview'
import HowToGetRewards from './HowToGetRewards'
import EarnMorePoints from './EarnMorePoints'
import data from './rewardsData'

class Rewards extends Component {
  render () {
    return (
      <div>
        <NavBar />
        <PointsOverview />
        <EarnMorePoints section={data.earnPointsLinks.pregnancy} />
        <HowToGetRewards />
      </div>
    )
  }
}

export default connect(state => state)(Rewards)
