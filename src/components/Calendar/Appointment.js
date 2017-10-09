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
import './appointment.css'

class Appointment extends Component {

  render () {
    return (
      <div>
        <div className='tipDateHeader'>
          <Container>
            Monday 5th December 2017 <Badge className='datePill' pill>Week 12-13</Badge>
          </Container>
        </div>
        <Container>
          <Card className='appointmentCard'>
            <CardBody>
              <Row>
                <Col xs="3"><FontAwesomeIcon name='calendar-o fa-4x' /></Col>
                <Col xs="7">
                  <CardTitle className='cardTitle'>Appointment</CardTitle>
                  <CardText className='cardBody'>Dating scan & Nuchal scan are now due.</CardText>
                </Col>
                <Col xs="2"><FontAwesomeIcon name='angle-right fa-5x' /></Col>
              </Row>
            </CardBody>
          </Card>
        </Container>
      </div>
    )
  }
}

export default connect(state => state)(Appointment)
