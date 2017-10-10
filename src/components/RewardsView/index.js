import React from 'react'
import { connect } from 'react-redux'
import {
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
  Button,
  Row,
  Col,
  Container
} from 'reactstrap'
import classnames from 'classnames'

import NavBar from '../NavBar'
import MyRewards from './MyRewards'
import Rewards from '../RewardCards'
import Footer from '../Footer'

import './index.css'

class RewardsView extends React.Component {
  constructor (props) {
    super(props)

    this.toggle = this.toggle.bind(this)
    this.state = {
      activeTab: 'catalogue'
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
          <p>
            You don't currently have any rewards, check out <u>your catalogue</u> to see what's available.
          </p>
          <Button onClick={() => { this.toggle('catalogue') }}>
            View My Catalogue
          </Button>
        </div>
      )
      : (
        <MyRewards />
      )

    return (
      <div>
        <Container>
          <NavBar />
          <Nav tabs justified>
            <NavItem>
              <NavLink
                className={classnames({ active: this.state.activeTab === 'catalogue' })}
                onClick={() => { this.toggle('catalogue') }}
              >
                Shop
              </NavLink>
            </NavItem>
            <div className='verticalDivider' />
            <NavItem>
              <NavLink
                className={classnames({ active: this.state.activeTab === 'myRewards' })}
                onClick={() => { this.toggle('myRewards') }}
              >
                My Rewards
              </NavLink>
            </NavItem>
          </Nav>
          <div className='tabHR' />
          <TabContent activeTab={this.state.activeTab}>
            <TabPane tabId='catalogue'>
              <Rewards />
            </TabPane>
            <TabPane tabId='myRewards'>
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
