import React from 'react'
import { connect } from 'react-redux'
import { Breadcrumb, BreadcrumbItem, Button, Card } from 'reactstrap'
import { Link } from 'react-router-dom'
import rewards from '../RewardCards/data'
import coupons from './rewardClaimedData'

import NavBar from '../NavBar'
import RewardPreview from '../RewardCards/RewardPreview'

import rewardImg from '../../img/rewardImgPlaceholder.png'
import couponImg from '../../img/couponImgPlaceholder.png'

class RewardClaimed extends React.Component {

  render(){

    const brace = '<'
    const url = this.props.match.url
    const identifiers = url.split('/rewards/view/')[1].split('/')
    const id = Number(identifiers[0])
    const serial = identifiers[1]

    const reward = rewards.find(reward => {
      return reward.id === id
    })

    const coupon = coupons[id].find(coupon => {
      return coupon.serial === serial
    })


    return (
      <div>
        <NavBar />
        <Breadcrumb>
          <BreadcrumbItem>
            <Link to={'/rewards/view'}>{brace} Back to Rewards</Link>
          </BreadcrumbItem>
        </Breadcrumb>
        <RewardPreview rewardImg={rewardImg} reward={reward} key={id} />
        <img className='coupon-img' src={couponImg} alt='' /><br/>
        <Button className='reward-claimed-button' color="primary">Print</Button><br/>
        <Button className='reward-claimed-button' color="primary">Email</Button><br/>
        <Button className='reward-claimed-button' color="secondary">Cancel and Remove</Button><br/>
        <Button className='terms-link' color="link">Terms & Conditions</Button>
      </div>
    )
  }
}

export default connect(state => state)(RewardClaimed)
