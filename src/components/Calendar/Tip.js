import React, { Component } from 'react'
import { connect } from 'react-redux'
import moment from 'moment'
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
    const tipInfo = this.props.tipInfo
    let startDay = tipInfo.startDay
    startDay = moment(startDay).format('dddd Do MMMM YYYY')
    const { title } = tipInfo
    return (
      <div>
        <div className='tipDateHeader'>
          <Container>
            {startDay}
          </Container>
        </div>
        <Container>
          <Card className='tipCard'>
            <CardBody>
              <Row>
                <Col xs='3'><FontAwesomeIcon name='lightbulb-o fa-5x' /></Col>
                <Col xs='9'>
                  <CardTitle className='cardTitle'>Tip</CardTitle>
                  <CardText className='cardBody'>{title}</CardText>
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
