import React from 'react'
import { connect } from 'react-redux'
import {
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
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
  }

  toggle (tab) {
    if (this.props.rewardsActiveTab !== tab) {
      this.props.dispatch({
        type: 'REWARDS_ACTIVE_TAB',
        payload: tab
      })
    }
  }

  render () {
    return (
      <div>
        <NavBar />
        <Container>
          <Nav tabs justified>
            <NavItem>
              <NavLink
                className={classnames({ active: this.props.rewardsActiveTab === 'shop' })}
                onClick={() => { this.toggle('shop') }}
              >
                Shop
              </NavLink>
            </NavItem>
            <div className='vertical-divider' />
            <NavItem>
              <NavLink
                className={classnames({ active: this.props.rewardsActiveTab === 'myRewards' })}
                onClick={() => { this.toggle('myRewards') }}
              >
                My Rewards
              </NavLink>
            </NavItem>
          </Nav>
          <div className='tab-hr' />
          <TabContent activeTab={this.props.rewardsActiveTab}>
            <TabPane tabId='shop'>
              <Rewards />
            </TabPane>
            <TabPane tabId='myRewards'>
              <PointsAvailable />
              <MyRewards />
            </TabPane>
          </TabContent>
        </Container>
        <Footer />
      </div>
    )
  }
}

export default connect(state => state)(RewardsView)
