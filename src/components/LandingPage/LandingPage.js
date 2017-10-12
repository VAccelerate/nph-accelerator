import React, { Component } from 'react'
import { connect } from 'react-redux'

import './landingPage.css'
import SignUp from '../SignUp'
import Carousel from './Carousel'
import Footer from '../Footer'
import {
  Container,
  Row,
  Col
} from 'reactstrap'

class LandingPage extends Component {
  render () {
    return (
      <div className='bgColor'>
        <Container>
          <Row>
            <Col>
              <Carousel />
            </Col>
          </Row>
          <Row>
            <Col>
              <SignUp />
            </Col>
          </Row>
        </Container>
        <Footer />
      </div>
    )
  }
}

export default connect(state => state)(LandingPage)
