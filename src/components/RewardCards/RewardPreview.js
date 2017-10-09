import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  Card,
  CardBody,
  CardTitle,
  CardImg,
  CardSubtitle,
  Row,
  Col
} from 'reactstrap'
import { Link } from 'react-router-dom'
import FontAwesomeIcon from '../FontAwesomeIcon'

import './rewardPreview.css'

class RewardPreview extends Component {
  render () {
    const { brand, description, id, title, disclaimer, points } = this.props.reward
    return (
      <div>
        <Link to={`/rewards/${id}`}>
          <Card className='rewardCard'>
            <CardBody>
              <Row>
                <Col xs='3'>
                  <CardImg alt='logo' src={this.props.rewardImg} />
                  <p>{points}pts</p>
                </Col>
                <Col xs='7'>
                  <CardTitle className='rewardTitle'>{title}</CardTitle>
                  <CardSubtitle className='rewardSubtitle'>{disclaimer}</CardSubtitle>
                </Col>
                <Col xs="2">
                  <FontAwesomeIcon name='angle-right fa-5x' />
                </Col>
              </Row>
            </CardBody>
          </Card>
        </Link>
      </div>
    )
  }
}

export default connect(state => state)(RewardPreview)
