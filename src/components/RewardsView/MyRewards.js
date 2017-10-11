import React, {Component, Link} from 'react'
import { connect } from 'react-redux'

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

    const userRewards = userRewardIds.map(getRewardById)

    return (
      <div>
        <div className='myRewardsDiv'>
          <div className='myRewardsStaticHeading'>
            Ready to use&nbsp;
          </div>
          <div className='myRewardsDynamicHeading'>
            - Showing {userRewards.length} of {userRewards.length} rewards
          </div>
          <div>
            {userRewards.map((reward, key) => {
              // Reward is always available as the user has already spent points on it
              return (
                  <RewardPreview reward={reward} isAvailable={true} key={key} />
              )
            })}
          </div>
        </div>
        {/*The following reward is a placeholder as there's no logic for used rewards*/}
        <div className='myUsedRewardsDiv'>
          <div className='myRewardsStaticHeading'>
            Used&nbsp;
          </div>
          <div className='myRewardsDynamicHeading'>
            - Showing 1 of 1 rewards
          </div>
          {/*Reward is unavailable as it has already been used*/}
          <RewardPreview reward={userRewards[0]} isAvailable={false} key={0} />
        </div>
      </div>
    )
  }
}

export default connect(state => state)(MyRewards)
