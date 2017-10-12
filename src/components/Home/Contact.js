import React, {Component} from 'react'
import { Card, CardText, Container } from 'reactstrap'
import { Link } from 'react-router-dom'
import heart from '../../img/SectionPages/heart.png'

import './contact.css'

class Contact extends Component {
  render () {
    return (
      <div>
        <div className='send-div'>
          <Container>
            <img className='send-heart' src={heart} alt='Heart icon' />
            <p className='send-text'>
            Do you have a friend or family member you think would benefit from our app?
          </p>
            <Link to='/home/send-to-family'>
              <Card className='send-card'>
                <CardText className='send-card-text'>
                  Send to family & friends
                </CardText>
              </Card>
            </Link>
          </Container>
        </div>
        <div className='contact-div'>
          <Container>
            <p>Contact us - Te Puia Hospital:</p>
            <p> 06 864 6803 </p>
            <br />
            <p>Midwives </p>
            <p>NPH - Corrina Parata: 021 765 053</p>
            <p>Liz Tamepo: 027 237 8467</p>
          </Container>
        </div>
      </div>
    )
  }
}
export default Contact
