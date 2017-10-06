import React, {Component} from 'react'
import { connect } from 'react-redux'
import { Button } from 'reactstrap'

import RewardPreview from '../RewardCards/RewardPreview'
import rewards from '../RewardCards/data'
import rewardImg from '../../img/rewardImgPlaceholder.png'

class MyRewards extends Component{

  render(){

    const { userRewardIds } = this.props

    function getRewardById(id) {
      return rewards.find(reward => {
        return reward.id === id
      })
    }

    const userRewards = userRewardIds.map(getRewardById)

    const display = userRewards.length === 0
    ? (
      <div>
        <p>
          You don't currently have any rewards, check out <u>your catalogue</u> to see what's available.
        </p>
        <Button>
          View My Catalogue
        </Button>
      </div>
    )
    : (
        <div className='container'>
          <p>Showing {userRewards.length} of {userRewards.length} rewards</p>
          {userRewards.map((offer, key) => {
            return (
              <RewardPreview rewardImg={rewardImg} offer={offer} key={key} />
            )
          })}
        </div>
    )

    return (
        <div className='container'>
          <p>Showing {userRewards.length} of {userRewards.length} rewards</p>
          {userRewards.map((offer, key) => {
            return (
              <RewardPreview rewardImg={rewardImg} offer={offer} key={key} />
            )
          })}
        </div>
    )

  }
}

export default connect(state => state)(MyRewards)
