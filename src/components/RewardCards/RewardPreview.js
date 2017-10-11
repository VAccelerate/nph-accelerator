import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  CardBody,
  CardTitle,
  CardImg,
  CardSubtitle,
  Row,
  Col
} from 'reactstrap'
import { Link } from 'react-router-dom'
import angle from '../../img/angle/angle.png'

import './rewardPreview.css'

class RewardPreview extends Component {
  render () {
    const { id, title, disclaimer, points, icon } = this.props.reward
    const cardStyle = this.props.pointsTotal >= points ? 'rewardCard' : 'unavailableRewardCard'
    const availableReward = this.props.pointsTotal > points

    return (
      availableReward
      ? (
        <div>
          <Link to={`/rewards/${id}`}>
            <CardBody className={cardStyle}>
              <Row>
                <Col xs='3' className='rewardLogo'>
                  <CardImg className='rewardLogoImg' alt='logo' src={icon} />
                  <p>{points}pts</p>
                </Col>
                <Col xs='7'>
                  <CardTitle className='rewardTitle'>{title}</CardTitle>
                  <CardSubtitle className='rewardSubtitle'>{disclaimer}</CardSubtitle>
                </Col>
                <Col xs='2'>
                  <img className='angleRight' src={angle} alt='Angle link' />
                </Col>
              </Row>
            </CardBody>
          </Link>
        </div>
        )
        : (
          <div>
            <CardBody className={cardStyle}>
              <Row>
                <Col xs='3' className='rewardLogo'>
                  <CardImg className='rewardLogoImg' alt='logo' src={icon} />
                  <p>{points}pts</p>
                </Col>
                <Col xs='7'>
                  <CardTitle className='rewardTitle'>{title}</CardTitle>
                  <CardSubtitle className='rewardSubtitle'>{disclaimer}</CardSubtitle>
                </Col>
                <Col xs='2'>
                  <img className='angleRight' src={angle} alt='Angle link' />
                </Col>
              </Row>
            </CardBody>
          </div>
      )
    )
  }
}

export default connect(state => state)(RewardPreview)
