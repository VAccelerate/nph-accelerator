import React from 'react'

import './landingPage.css'
import SignUp from '../SignUp'
import Carousel from './Carousel'
import {
  Container,
  Row,
  Col
} from 'reactstrap'
import logo from '../../img/logo.png'

const LandingPage = () => {
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
      <Row className='landingFooter'>
        <Col xs='3'>
          <img src={logo} className='landingFooterLogo' alt='Generic placeholder ' />
        </Col>
        <Col xs='9'>
          <div className='landingFooterText'>by Ngati Porou Hauora</div>
        </Col>
      </Row>
    </div>
  )
}

export default LandingPage
