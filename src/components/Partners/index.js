import React, { Component } from 'react'
import {
  Row,
  Col
} from 'reactstrap'
import vodafoneLogo from '../../img/grayscale/vodafone/bitmap@3x.png'
import foursquareLogo from '../../img/grayscale/foursquare/bitmap@3x.png'
import gasLogo from '../../img/grayscale/gasolinealley/bitmap@3x.png'

import './partners.css'

class Partners extends Component {
  render () {
    return (
      <div>
        <Row className='partner-row'>
          <Col>
            <div className='partnerText'>
              Some of our partners
            </div>
          </Col>
        </Row>
        <Row className='partner-row'>
          <Col>
            <img src={foursquareLogo} className='partnerLogo' alt='4Square logo' />
          </Col>
          <Col>
            <img src={vodafoneLogo} className='partnerLogo' alt='VF logo' />
          </Col>
        </Row>
        <Row className='partner-row'>
          <Col>
            <img src={gasLogo} className='partnerLogo' alt='g.a.s. logo' />
          </Col>
        </Row>
      </div>
    )
  }
}
export default Partners
