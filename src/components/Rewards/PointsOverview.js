import React, {Component} from 'react'
import { connect } from 'react-redux'
import { Card } from 'reactstrap'

class Advice extends Component {
  render () {
    const { pointsTotal } = this.props
    // Once data is available create dynamic generator for these fields
    const moneySaved = 300
    const pointsToReward = 200
    const challengesCompleted = 25
    const rank = {
      icon: 'https://image.flaticon.com/icons/svg/179/179587.svg',
      title: 'Bronze'
    }

    return (
      <div>
        <Card className='points-overview'>
          <div className='points-earned'>
            <h4 className='points-overview-header'>Points Earned</h4>
            <p className='points-overview-total'>{pointsTotal}</p>
            <div className='points-overview-rank'>
              <img
                src={rank.icon}
                alt=''
                className='points-overview-rank-img'
              />
              <p className='points-overview-rank-title'>{rank.title}</p>
            </div>
          </div>
          <div className='points-stats'>
            <h4 className='points-overview-header'>Money Saved</h4>
            <p className='points-overview-subheader'>${moneySaved}</p>
            <h4 className='points-overview-header'>Til Next Reward</h4>
            <p className='points-overview-subheader'>{pointsToReward}pts</p>
            <h4 className='points-overview-header'>Challenges Completed</h4>
            <p className='points-overview-subheader'>{challengesCompleted}/40</p>
          </div>
        </Card>
      </div>
    )
  }
}

export default connect(state => state)(Advice)
