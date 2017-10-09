import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  Card,
  CardBody,
  CardTitle,
  CardText,
  Container,
  Row,
  Col
} from 'reactstrap'
import FontAwesomeIcon from '../FontAwesomeIcon'
import './tip.css'

class Tip extends Component {

  render () {
    return (
      <div>
        <div className='tipDateHeader'>
          <Container>
            Wednesday 28th December 2017
          </Container>
        </div>
        <Container>
          <Card className='tipCard'>
            <CardBody>
              <Row>
                <Col xs="3"><FontAwesomeIcon name='lightbulb-o fa-5x' /></Col>
                <Col xs="9">
                  <CardTitle className='cardTitle'>Tip</CardTitle>
                  <CardText className='cardBody'>Make sure you go to the dentist every 3 months.</CardText>
                </Col>
              </Row>
            </CardBody>
          </Card>
        </Container>
      </div>
    )
  }
}

export default connect(state => state)(Tip)
