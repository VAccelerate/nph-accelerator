import React, {Component} from 'react'
import { connect } from 'react-redux'
import { Button } from 'reactstrap'

import OfferPreview from '../Offers/OfferPreview'
import offers from '../Offers/data'
import offerImg from '../../img/offerImgPlaceholder.png'

class MyRewards extends Component{

  render(){

    const { userRewardIds } = this.props

    function getRewardById(id) {
      return offers.find(offer => {
        return offer.id === id
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
              <OfferPreview offerImg={offerImg} offer={offer} key={key} />
            )
          })}
        </div>
    )

    return (
        <div className='container'>
          <p>Showing {userRewards.length} of {userRewards.length} rewards</p>
          {userRewards.map((offer, key) => {
            return (
              <OfferPreview offerImg={offerImg} offer={offer} key={key} />
            )
          })}
        </div>
    )

  }
}

export default connect(state => state)(MyRewards)
