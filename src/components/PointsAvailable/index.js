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
            <div className='pointsHeaderVWrap'>
              <div className='pointsHeaderVBox'>
                Points available
              </div>
            </div>
          </Col>
          <Col>
            <div className='pointsPillVWrap'>
              <div className='pointsPillVBox'>
                <Badge className='pointsPill' pill>{this.props.pointsTotal}</Badge>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    )
  }
}

export default connect(state => state)(PointsAvailable)
