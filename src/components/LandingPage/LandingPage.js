import React, { Component } from 'react'
import { connect } from 'react-redux'

import './landingPage.css'
import SignUp from '../SignUp'
import Carousel from './Carousel'
import {
  Container,
  Row,
  Col
} from 'reactstrap'
import logo from '../../img/logo.png'

class LandingPage extends Component {
  constructor (props) {
    super(props)
  }

  render () {
    return (
      <div>
        <Container className='bgColor'>
          <Row>
            <Col>
              <Carousel/>
            </Col>
          </Row>
          <Row>
            <Col>
              <SignUp/>
            </Col>
          </Row>
          <Row className='landingFooter'>
            <Col xs='3'>
              <img src={logo} className='landingFooterLogo' alt='Generic placeholder '/>
            </Col>
            <Col xs='9'>
              <div className='landingFooterText'>by Ngati Porou Hauora</div>
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}

export default connect(state => state)(LandingPage)
