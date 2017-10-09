import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  Badge,
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
import FontAwesomeIcon from '../FontAwesomeIcon'
import './appointment.css'

class Reward extends Component {

  render () {

    return (
      <div>
        <hr className='hr' />
        <span>Date <Badge color="light" pill>Week 12-13</Badge></span><hr style={{margin: 0, padding: 5}}/>
        <Container>
          <Card className='appointment'>
            <CardBody>
              <Row>
                <Col xs="3"><FontAwesomeIcon name='calendar-o fa-4x' /></Col>
                <Col xs="7">
                  <CardTitle>Appointment</CardTitle>
                  <CardText>Dating scan & Nuchal scan are now due.</CardText>
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

export default connect(state => state)(Reward)
