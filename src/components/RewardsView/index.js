import React from 'react'
import { connect } from 'react-redux'
import {
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
  Button,
  Container
} from 'reactstrap'
import classnames from 'classnames'

import NavBar from '../NavBar'
import MyRewards from './MyRewards'
import Rewards from '../RewardCards'
import PointsAvailable from '../PointsAvailable'
import Footer from '../Footer'

import './index.css'

class RewardsView extends React.Component {
  constructor (props) {
    super(props)

    this.toggle = this.toggle.bind(this)
    this.state = {
      activeTab: 'shop'
    }
  }

  toggle (tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      })
    }
  }

  render () {
    const { userRewardIds } = this.props

    const myRewardsDisplay = userRewardIds.length === 0
      ? (
        <div>
          <Container className='my-rewards-empty'>
            You don’t currently have any rewards, check out your shop to see what’s available.
          </Container>
          <Button block outline className='my-shop-btn' onClick={() => { this.toggle('shop') }}>
            View my shop
          </Button>
        </div>
      )
      : (
        <MyRewards />
      )

    return (
      <div>
        <NavBar />
        <Container>
          <Nav tabs justified>
            <NavItem>
              <NavLink
                className={classnames({ active: this.state.activeTab === 'shop' })}
                onClick={() => { this.toggle('shop') }}
              >
                Shop
              </NavLink>
            </NavItem>
            <div className='vertical-divider' />
            <NavItem>
              <NavLink
                className={classnames({ active: this.state.activeTab === 'myRewards' })}
                onClick={() => { this.toggle('myRewards') }}
              >
                My Rewards
              </NavLink>
            </NavItem>
          </Nav>
          <div className='tab-hr' />
          <TabContent activeTab={this.state.activeTab}>
            <TabPane tabId='shop'>
              <Rewards />
            </TabPane>
            <TabPane tabId='myRewards'>
              <PointsAvailable />
              {myRewardsDisplay}
            </TabPane>
          </TabContent>
        </Container>
        <Footer />
      </div>
    )
  }
}

export default connect(state => state)(RewardsView)
