import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Input } from 'reactstrap'

import rewards from './data.js'
import rewardImg from '../../img/rewardImgPlaceholder.png'
import RewardPreview from './RewardPreview'

import './rewards.css'

class Rewards extends Component {
  constructor(props) {
    super(props)
    this.handleChange = this.handleChange.bind(this)

    this.state = {
      searchString: ''
    }
  }

  handleChange(event) {
    const { name, value } = event.target
    this.setState({
      [name]: value
    })
  }

  render () {
    const rewardsString = JSON.stringify(rewards)
    let rewardsToDisplay = this.state.searchString.length > 0
      ? rewards.filter(reward => {
        const rewardString = (reward.description +
          ' ' + reward.brand +
          ' ' + reward.title +
          ' ' + reward.description +
          ' ' + reward.points).toLowerCase()
        return (
          rewardString.indexOf(this.state.searchString.toLowerCase()) !== -1
        )}
      )
      : rewards

    return (
      <div>
        <div className='container'>
          <Input className='searchInput' onChange={this.handleChange} type="text" name="searchString" id="searchString" placeholder="Type to search" />
          Showing {rewardsToDisplay.length} of {rewards.length} rewards
          {rewardsToDisplay.map((reward, key) => {
            return (
              <RewardPreview rewardImg={rewardImg} reward={reward} key={key} />
            )
          })}
        </div>
      </div>
    )
  }
}

export default connect(state => state)(Rewards)
