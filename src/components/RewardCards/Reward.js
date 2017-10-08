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

class Reward extends Component {
  render () {
    const rewardId = this.props.match.params.id
    const { brand, description, id, title, disclaimer, points } = data[rewardId]
    return (
      <div>
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
                  <Button>Claim for {points} points</Button>
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
