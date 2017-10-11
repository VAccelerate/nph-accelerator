import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  Button,
  Row,
  Col,
  Container,
  CardSubtitle,
  CardTitle,
  CardText,
  CardImg,
  CardBody
} from 'reactstrap'
import { Link } from 'react-router-dom'

import rewards from '../RewardCards/data'
import NavBar from '../NavBar'
import PointsAvailable from '../PointsAvailable'
import Footer from '../Footer'
import couponImg from '../../img/couponImgPlaceholder.png'
import angle from '../../img/angle/angle-left.svg'
import './index.css'

class RewardClaimed extends Component {
  handleCancel (id, points) {
    this.props.dispatch({type: 'CANCEL_REWARD',
      payload: {
        id: Number(id),
        serial: '00001',
        // serial to be set to unique once data structure added
        points: points
      }})
  }

  render () {
    const url = this.props.match.url
    const identifiers = url.split('/rewards/')[1].split('/')
    const id = Number(identifiers[0])
    const reward = rewards.find(reward => {
      return reward.id === id
    })
    const { icon, points, title, disclaimer, brand } = reward

    return (
      <div>
        <NavBar />
        <Container>
          <Link to={`/rewards`}>
            <Row className='backHeader'>
              <Col xs='2' className='backHeaderCol'>
                <img className='angleLeft' src={angle} alt='Angle link' />
              </Col>
              <Col xs='10' className='backHeaderCol'>
                Back to My Rewards
              </Col>
            </Row>
          </Link>
          <PointsAvailable />
          <CardBody className='rewardCard'>
            <Row>
              <Col xs='3' className='rewardUnclaimedLogo'>
                <CardImg className='rewardLogoImg' alt='logo' src={icon} />
                <p>{points}pts</p>
              </Col>
              <Col xs='9'>
                <CardTitle className='rewardTitle'>{title}</CardTitle>
                <CardSubtitle className='rewardSubtitle'>{disclaimer}</CardSubtitle>
              </Col>
            </Row>
            <Row>
              <Col className='rewardUnclaimedDesc'>
                <CardText className='reward-claim-desc-text'>
                  Just show this barcode on your phone to the retail staff at your nearest {brand} to claim.
                </CardText>
                <div className='reward-scan-code'>
                  <img className='coupon-img' src={couponImg} alt='' />
                </div>
                <Button block className='reward-action-btn' color='primary'>Print</Button>
                <Button block className='reward-action-btn' color='primary'>Email</Button>
                <div className='reward-cancel-btn-div'>
                  <Link to={`/rewards`}>
                    <Button
                      block
                      outline
                      onClick={() => this.handleCancel(id, points)}
                      className='reward-cancel-btn'
                      color='secondary'
                    >
                      Cancel and Remove
                    </Button>
                  </Link>
                </div>
              </Col>
            </Row>
          </CardBody>
          <Link to={`/terms`} className='link'>Terms & conditions</Link>
        </Container>
        <Footer />
      </div>
    )
  }
}

export default connect(state => state)(RewardClaimed)
