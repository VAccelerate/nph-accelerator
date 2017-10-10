import React from 'react'
import {
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap'
import classnames from 'classnames'

import NavBar from '../NavBar'
import Rewards from '../Rewards'

export default class RewardsView extends React.Component {
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
            rewards go here
          </TabPane>
          </TabContent>
        </div>
      </div>
    )
  }
}
