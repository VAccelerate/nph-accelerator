import React, {Component} from 'react'
import { connect } from 'react-redux'
import {
  Container,
  Button
} from 'reactstrap'

import RewardPreview from '../RewardCards/RewardPreview'
import rewards from '../RewardCards/data'
import './myRewards.css'

class MyRewards extends Component {
  render () {
    const { userRewardIds } = this.props

    function getRewardById (id) {
      return rewards.find(reward => {
        return reward.id === id
      })
    }

    const userRewards = userRewardIds.length === 0
      ? null
      : userRewardIds.map(getRewardById)

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
        <div className='my-rewards-div'>
          <div className='my-rewards-static-heading'>
            Ready to use&nbsp;
          </div>
          <div className='my-rewards-dynamic-heading'>
            - Showing {userRewards.length} of {userRewards.length} rewards
          </div>
          <div>
            {userRewards.map((reward, key) => {
              // Reward is always available as the user has already spent points on it
              return (
                <RewardPreview reward={reward} isAvailable={true} isClaimed={true} key={key} />
              )
            })}
          </div>
        </div>
      )

    return (
      <div>
        {myRewardsDisplay}
        {/*The following reward is a placeholder as there's no logic for used rewards*/}
        <div className='my-used-rewards-div'>
          <div className='my-rewards-static-heading'>
            Used&nbsp;
          </div>
          <div className='my-rewards-dynamic-heading'>
            - Showing 1 of 1 rewards
          </div>
          {/*Reward is unavailable as it has already been used*/}
          <RewardPreview reward={rewards[0]} isAvailable={false} key={0} />
        </div>
      </div>
    )
  }
}

export default connect(state => state)(MyRewards)
