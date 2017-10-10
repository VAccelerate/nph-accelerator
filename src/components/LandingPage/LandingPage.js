import React from 'react'

import './landingPage.css'
import SignUp from '../SignUp'
import Carousel from './Carousel'
import {
  Container,
  Row
} from 'reactstrap'

const LandingPage = () => {
  return (
    <div className='bgColor'>
      <Container>
        <Row>
          <Carousel />
        </Row>
        <Row>
          <SignUp />
        </Row>
      </Container>
    </div>
  )
}

export default LandingPage
