import React, { Component } from 'react'
import { connect } from 'react-redux'
import NavBar from '../NavBar'
import PointsOverview from './PointsOverview'
import HowToGetRewards from './HowToGetRewards'
import EarnMorePoints from './EarnMorePoints'
import data from './rewardsData'
import LinkBlockButton from '../LinkBlockButton'
import Footer from '../Footer'

import './pointsOverview.css'

class Rewards extends Component {
  render () {
    return (
      <div>
        <NavBar />
        <PointsOverview />
        <LinkBlockButton linkContent={{title: 'My Rewards', descText: 'View claimed rewards', link:'../../rewards'}}/>
        <LinkBlockButton linkContent={{title: 'Rewards Shop', descText: 'View all your points deals', link:'../../rewards'}}/>
        <LinkBlockButton linkContent={{title: 'How Do Rewards Work?', descText: 'A quick guide to rewards', link:''}}/><hr className='lines' />
        <HowToGetRewards /><hr className='lines' />
        <EarnMorePoints section={data.earnPointsLinks.pregnancy} />
        <Footer />
      </div>
    )
  }
}

export default connect(state => state)(Rewards)
