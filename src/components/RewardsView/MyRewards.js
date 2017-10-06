import React, {Component} from 'react'
import { connect } from 'react-redux'

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

    return (
      <div>
        <div className='container'>
          <p>Showing {userRewards.length} of {userRewards.length} rewards</p>
          {userRewards.map((offer, key) => {
            return (
              <OfferPreview offerImg={offerImg} offer={offer} key={key} />
            )
          })}
        </div>
      </div>
    )

  }
}

export default connect(state => state)(MyRewards)
