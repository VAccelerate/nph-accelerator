import React, { Component } from 'react'
import { connect } from 'react-redux'

import offers from './data.js'
import offerImg from '../../img/offerImgPlaceholder.png'
import OfferPreview from './OfferPreview'

class Offers extends Component {
  render () {
    return (
      <div>
        <div className='container'>
          {offers.map((offer, key) => {
            return (
              <OfferPreview offerImg={offerImg} offer={offer} key={key} />
            )
          })}
        </div>
      </div>
    )
  }
}

export default connect(state => state)(Offers)
