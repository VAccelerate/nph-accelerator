import React, { Component } from 'react'
import { connect } from 'react-redux'
import moment from 'moment'
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
    const appointmentInfo = this.props.appointmentInfo
    let startDay = appointmentInfo.startDay
    startDay = moment(startDay).format('dddd Do MMMM YYYY')
    const { weeksOfPreg, title } = appointmentInfo
    return (
      <div>
        <div className='tipDateHeader'>
          <Container>
            {startDay} <Badge className='datePill' pill>{weeksOfPreg}</Badge>
          </Container>
        </div>
        <Container>
          <Card className='appointmentCard'>
            <CardBody>
              <Row>
                <Col xs='3'><FontAwesomeIcon name='calendar-o fa-4x' /></Col>
                <Col xs='7'>
                  <CardTitle className='cardTitle'>Appointment</CardTitle>
                  <CardText className='cardBody'>{title}</CardText>
                </Col>
                <Col xs='2'><FontAwesomeIcon name='angle-right fa-5x' /></Col>
              </Row>
            </CardBody>
          </Card>
        </Container>
      </div>
    )
  }
}

export default connect(state => state)(Appointment)
