import React, {Component} from 'react'
import { Button, Container, Row, Col } from 'reactstrap'
import heart from '../../img/heart.svg'
import nph from '../../img/logo.png'

import './contact.css'

class Contact extends Component {
  render () {
    return (
      <div>
      <div className='send-div'>
        <Container>
          <img className='send-heart' src={heart}/>
          <p className='send-text'>
            Do you have a friend or family member you think would benefit from our app?
          </p>
          <Button className='send-button'> Send to family & friends </Button>
        </Container>
      </div>
      <div className='contact-div'>
        <Container>
          <p>Contact us - Te Puia Hospital:</p>
          <p> 06 864 6803 </p>
          <br/>
          <p>Midwives </p>
          <p>NPH - Corrina Parata: 021 765053</p>
        </Container>
      </div>
      <div className='nph-div'>
        <Row>
          <Col xs='4' className='nph-img-div'>
            <img className='nph-img' src={nph}/>
          </Col>
          <Col xs='8'>
            <h2 className='nph-text'> by Ngati Porou Hauora</h2>
          </Col>
        </Row>
      </div>
      </div>
    )
  }
}
export default Contact
