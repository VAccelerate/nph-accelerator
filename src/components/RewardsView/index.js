import React from 'react'
import { connect } from 'react-redux'
import {
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
  Card,
  Button,
  CardTitle,
  CardText,
  Row,
  Col
} from 'reactstrap'
import classnames from 'classnames'

import NavBar from '../NavBar'
import MyRewards from './MyRewards'
import Rewards from '../RewardCards/Rewards'

class RewardsView extends React.Component {

  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      activeTab: 'catalogue'
    }
  }

  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }

  render(){

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
        <div>nope</div>
      )

    return (
      <div>
        <div className='container'>
          <NavBar />
          <Nav tabs>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === 'catalogue' })}
              onClick={() => { this.toggle('catalogue') }}
            >
              Catalogue
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === 'myRewards' })}
              onClick={() => { this.toggle('myRewards') }}
            >
              My Rewards
            </NavLink>
          </NavItem>
        </Nav>
        <TabContent activeTab={this.state.activeTab}>
          <TabPane tabId='catalogue'>
            <Rewards />
          </TabPane>
          <TabPane tabId='myRewards'>
            {myRewardsDisplay}
          </TabPane>
        </TabContent>
        </div>
      </div>
    )
  }
}

export default connect(state => state)(RewardsView)
