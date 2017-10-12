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
            <div className='pointsOuter'>
              <div className='pointsMiddle'>
                <div className='pointsInner'>
                  Points available
                </div>
              </div>
            </div>
          </Col>
          <Col>
            <div className='pointsOuter'>
              <div className='pointsMiddle'>
                <div className='pointsInner'>
                  <Badge className='pointsPill' pill>{this.props.pointsTotal}</Badge>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    )
  }
}

export default connect(state => state)(PointsAvailable)
