import React from 'react'

import './landingPage.css'
import SignUp from '../SignUp'
import Carousel from './Carousel'
import {
  Container,
  Row,
  Col
} from 'reactstrap'

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
    </div>
  )
}

export default LandingPage
