import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  Badge,
  Card,
  CardBody,
  CardTitle,
  CardText,
  Container,
  Row,
  Col
} from 'reactstrap'
import FontAwesomeIcon from '../FontAwesomeIcon'
import './footer.css'

class Footer extends Component {

  render () {
    return (
      <div>
        <div className='madeBy'>
          <Container>
            <Row>
              <Col xs="3"><FontAwesomeIcon name='calendar-o fa-4x' /></Col>
              <Col xs="9">
                by Ngati Porou Hauora
              </Col>
            </Row>
          </Container>
        </div>

        <div className='socialIcons'>
          <Container>
            <Row>
              <Col>
                <FontAwesomeIcon name='facebook-square fa-3x' />
              </Col>
              <Col>
                <FontAwesomeIcon name='twitter-square fa-3x' />
              </Col>
              <Col>
                <FontAwesomeIcon name='instagram fa-3x' />
              </Col>
              <Col>
                <FontAwesomeIcon name='envelope-o fa-3x' />
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    )
  }
}

export default connect(state => state)(Footer)
