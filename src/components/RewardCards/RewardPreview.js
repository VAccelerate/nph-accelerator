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
import { Link } from 'react-router-dom'

import './rewardPreview.css'

class RewardPreview extends Component {
  render () {
    const { brand, description, id, title, disclaimer, points } = this.props.reward
    return (
      <div>
        <Container>
          <Link to='/'>
            <Card className='rewardCard'>
              <CardBody>
                <Row>
                  <Col xs="4" className='divider'>
                    <h5>{brand}</h5>
                    <CardImg alt='logo' src={this.props.rewardImg} />
                  </Col>
                  <Col xs="8">
                    <CardTitle className='reward'>{title}</CardTitle>
                    <CardSubtitle className='reward'>{disclaimer}</CardSubtitle>
                    <CardText className='points'>{points}pts</CardText>
                  </Col>
                </Row>
              </CardBody>
            </Card>
          </Link>
        </Container>
      </div>
    )
  }
}

export default connect(state => state)(RewardPreview)
