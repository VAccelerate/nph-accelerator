import React, {Component} from 'react'
import { connect } from 'react-redux'

import RewardPreview from '../RewardCards/RewardPreview'
import rewards from '../RewardCards/data'
import rewardImg from '../../img/rewardImgPlaceholder.png'

class MyRewards extends Component{

  render () {
    const { userRewardIds } = this.props
    function getRewardById(id) {
      return rewards.find(reward => {
        return reward.id === id
      })
    }

    const userRewards = userRewardIds.map(getRewardById)

    return (
        <div className='container'>
          <p>Showing {userRewards.length} of {userRewards.length} rewards</p>
          {userRewards.map((reward, key) => {
            return (
              <RewardPreview rewardImg={rewardImg} reward={reward} key={key} />
            )
          })}
        </div>
    )

  }
}

export default connect(state => state)(MyRewards)
