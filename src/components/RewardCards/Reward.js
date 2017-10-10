import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  Card,
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

import './rewardPreview.css'
import data from './data'
import NavBar from '../NavBar'

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
    const { brand, description, title, disclaimer, points } = data[rewardId]
    const { pointsTotal } = this.props
    const buttonDisplay = pointsTotal < points
      ? (
        <Button disabled>
        Claim for {points} points
        </Button>
      )
      : (
        <Button
          onClick={this.handlePurchase.bind(this)}
        >
          Claim for {points} points
        </Button>
      )
    return (
      <div>
        <NavBar />
        <Container>
          <Card>
            <CardBody>
              <Row>
                <Col xs='4' className='divider'>
                  <h5>{brand}</h5>
                  <CardImg alt='logo' src={this.props.rewardImg} />
                </Col>
                <Col xs='8'>
                  <CardTitle className='reward'>{title}</CardTitle>
                  <CardSubtitle className='reward'>{disclaimer}</CardSubtitle>
                  <CardText className='points'>{points}pts</CardText>
                </Col>
              </Row>
              <hr />
              <Row>
                <Col>
                  <CardText>{description}</CardText>
                  {buttonDisplay}
                </Col>
              </Row>
            </CardBody>
          </Card>
          <p>Terms & conditions</p>
        </Container>
      </div>
    )
  }
}

export default connect(state => state)(Reward)
