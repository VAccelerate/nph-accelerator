import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Container } from 'reactstrap'

import './aboutPage.css'
import NavBar from '../NavBar'
import Footer from '../Footer'
import aboutPageImg from '../../img/aboutPage.png'

class AboutPage extends Component {
  componentDidUpdate () {
    ReactDOM.findDOMNode(this.refs.topOfPage).scrollIntoView()
  }
  render () {
    return (
      <div>
        <div ref='topOfPage' />
        <NavBar />
        <img className='mainImg' src={aboutPageImg} alt='' />
        <Container>
          <h4 className='articleTitle'>About Us</h4>
          <div>
            <div className='contentStyle'>
              Pepi Ora has been developed by Ngati Porou Hauora, a small Primary
              Health Organisation that spans the East Coast from Potikirua in the
              north to Te Toka-a-Taiau in the south. Many people in Ngati Porou
              live in very remote and rurally isolated communities along the coast,
              accessing health information can be a challenge when you are raising
              a family.
            </div>
            <div className='contentStyle'>
              Through tradition and technology, Pepi Ora has been co-designed to
              support young families to make a positive difference in their
              childrens lives and future.
            </div>
            <div className='contentStyle'>
              The name Pepi Ora came from a group of young whanau in Ngati Porou.
              Pepi means a baby in infancy and Ora is a state of wellbeing, to
              be healthy, fit and alive. Pepi Ora provides information on
              parenting through pregnancy, about babies and toddlers, support
              and help providing a calendar of important dates and reminders
              through a busy time of a pepi growth and development.
            </div>
            <div className='contentStyle'>
              Everyone wants their pepi to be happy, strong and healthy.
              This App incentivises health checks.
            </div>
            <h4 className='articleTitle'>Get in touch</h4>
            <h4 className='boldGreyTitle'>Frances King</h4>
            <ul className='midwifeContact'>
              <li>Ngati Porou Hauora</li>
              <li><span className='midwifeContactType'>Mobile: </span><span>021 861 426</span></li>
              <li><span className='midwifeContactType'>Email: </span><a className='pinkUnderline' href='mailto:frances.king@nph.org.nz'>frances.king@nph.org.nz</a></li>
            </ul>
            <h4 className='boldGreyTitle'>Corrina Parata</h4>
            <ul className='midwifeLocations'>
              <li>Ngati Porou Hauora</li>
            </ul>
            <ul className='midwifeContact'>
              <li><span className='midwifeContactType'>Phone: </span>06 864 7788</li>
              <li><span className='midwifeContactType'>Mobile: </span><span>027 237 8467</span></li>
              <li><span className='midwifeContactType'>Email: </span><a className='pinkUnderline' href='mailto:corrina.parata@nph.org.nz'>corrina.parata@nph.org.nz</a></li>
            </ul>
          </div>
        </Container>
        <Footer />
      </div>
    )
  }
}

export default AboutPage
