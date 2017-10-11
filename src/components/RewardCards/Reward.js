import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  CardBody,
  CardTitle,
  CardImg,
  CardSubtitle,
  CardText,
  Button,
  Container,
  Row,
  Col
} from 'reactstrap'
import { Link } from 'react-router-dom'

import './reward.css'
import data from './data'
import NavBar from '../NavBar'
import Footer from '../Footer'
import PointsAvailable from '../PointsAvailable'
import angle from '../../img/angle/angle-left.svg'

class Reward extends Component {
  handlePurchase () {
    const id = this.props.match.params.id
    this.props.dispatch({type: 'CLAIM_REWARD',
      payload: {
        id: Number(id),
        serial: '00001',
      // serial to be set to unique once data structure added
        points: data[id].points
      }})
    this.props.history.push(`/rewards/${id}/00001`)
  }

  render () {
    const rewardId = this.props.match.params.id
    const { title, disclaimer, points, icon, description } = data[rewardId]
    const { pointsTotal } = this.props
    const buttonDisplay = pointsTotal < points
      ? (
        <Button
          block
          outline
          disabled
          className='rewardClaimButton'
        >
          Claim for {points} points
        </Button>
      )
      : (
        <Button
          block
          outline
          className='rewardClaimButton'
          onClick={this.handlePurchase.bind(this)}
        >
          Claim for {points} points
        </Button>
      )

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
                Back to Shop
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
                <CardText>{description}</CardText>
                {buttonDisplay}
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

export default connect(state => state)(Reward)
