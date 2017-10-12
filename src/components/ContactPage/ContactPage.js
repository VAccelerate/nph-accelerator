import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Container, Card } from 'reactstrap'

import './contactPage.css'
import NavBar from '../NavBar'
import Footer from '../Footer'
import contactPageImg from '../../img/contactPage.png'
import heartImg from '../../img/SectionPages/heart.png'

class ArticlePage extends Component {
  componentDidUpdate () {
    ReactDOM.findDOMNode(this.refs.topOfPage).scrollIntoView()
  }
  render () {
    return (
      <div>
        <div ref='topOfPage' />
        <NavBar />
        <img className='mainImg' src={contactPageImg} alt='' />
        <Container>
          <h4 className='articleTitle'>Contact Us</h4>
          <div>
            <div className='contentStyle'>
              Pepi Ora has been developed by Ngati Porou Hauora, a small Primary
              Health Organisation that spans the East Coast from Potikirua in
              the north to Te Toka-a-Taiau in the south.
            </div>
            <h4 className='articleTitle'>Get in touch</h4>
            <h4 className='boldGreyTitle'>Frances King</h4>
            <ul className='midwifeContact'>
              <li>Ngati Porou Hauora</li>
              <li><span className='midwifeContactType'>Mobile: </span><span>027 237 8467</span></li>
              <li><span className='midwifeContactType'>Email: </span><span className='pinkUnderline'>lizzie.andre@xtra.co.nz</span></li>
            </ul>
            <h4 className='articleTitle'>Midwives</h4>
            <h4 className='boldGreyTitle'>Liz Tamepo</h4>
            <ul className='midwifeLocations'>
              <li>Tuesday: Te Araroa</li>
              <li>Wednesday: Ruatoria</li>
              <li>Thursday: Puhi Kaiti</li>
            </ul>
            <ul className='midwifeContact'>
              <li><span className='midwifeContactType'>Phone: </span>06 864 7788</li>
              <li><span className='midwifeContactType'>Mobile: </span><span>027 237 8467</span></li>
              <li><span className='midwifeContactType'>Email: </span><span className='pinkUnderline'>lizzie.andre@xtra.co.nz</span></li>
            </ul>
            <h4 className='boldGreyTitle'>Corrina Parata</h4>
            <ul className='midwifeLocations'>
              <li>Ngati Porou Hauora</li>
            </ul>
            <ul className='midwifeContact'>
              <li><span className='midwifeContactType'>Phone: </span>06 864 7788</li>
              <li><span className='midwifeContactType'>Mobile: </span><span>027 237 8467</span></li>
              <li><span className='midwifeContactType'>Email: </span><span className='pinkUnderline'>lizzie.andre@xtra.co.nz</span></li>
            </ul>
          </div>
        </Container>
        <Card className='shareCard'>
          <img className='heartImg' src={heartImg} alt='heart' />
          <p className='shareCardText'>
            Do you have a friend or family member you think would benefit from our app?
          </p>
          <Card className='shareCardButton'>
            <span className='buttonText'>Send to family & friends</span>
          </Card>
        </Card>
        <Footer />
      </div>
    )
  }
}

export default ArticlePage
