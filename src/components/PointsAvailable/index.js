import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  Badge,
  Container,
  Row,
  Col
} from 'reactstrap'

import './pointsAvailable.css'

class PointsAvailable extends Component {
  render () {
    return (
      <Container>
        <Row className='pointsHeader'>
          <Col className='pointsHeaderText'>
            <div className='pointsHeaderTextDiv'>Points available</div>
          </Col>
          <Col>
            <Badge className='pointsPill' pill>{this.props.pointsTotal}</Badge>
          </Col>
        </Row>
      </Container>
    )
  }
}

export default connect(state => state)(PointsAvailable)
