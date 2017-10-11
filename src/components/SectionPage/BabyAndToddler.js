import React, { Component } from 'react'
import {
  Container,
  Card,
  CardTitle,
  CardText,
  Row,
  Col
} from 'reactstrap'
import { Link } from 'react-router-dom'

import NavBar from '../NavBar'
import './sectionPage.css'
import babyAndToddlerArticles from './babyAndToddlerArticles'
import babyAndToddlerImg from '../../img/SectionPages/babyAndToddler.png'
import angleCalendar from '../../img/angle/angle.png'
import angleLink from '../../img/darkAngle/angle@2x.png'
import Footer from '../Footer'

class YourPregnancy extends Component {
  render () {
    return (
      <div>
        <NavBar />
        <img className='bannerImg' src={babyAndToddlerImg} alt='' />
        <Container>
          <h4 className='sectionPageTitle'>Baby & Toddler</h4>
          <p className='sectionPageContent'>Everything you need to know about
            your little one. Have a browse through the sections below and don’t
            forget to unlock challenges for rewards.</p>
          <Link to='/calendar'><Card className='myCalendarCard'>
            <Row>
              <Col xs='10'>
                <CardTitle className='myCalendarTitle'>My Calendar</CardTitle>
                <CardText className='myCalendarText'>See your appointents and tips</CardText>
              </Col>
              <Col xs='2'>
                <img className='angleCalendar' src={angleCalendar} alt='' />
              </Col>
            </Row>
          </Card></Link>
          {
            babyAndToddlerArticles.map((article, key) => {
              const { title, description, largeTitle } = article
              return (
                <Link key={key} to={`/baby-and-toddler/${article.id}`}><Card key={key} className='linkCard'>
                  <Row>
                    <Col xs='10'>
                      {
                        largeTitle
                        ? <CardTitle className='linkTitle'>{largeTitle}</CardTitle>
                        : <CardTitle className='linkTitle'>{title}</CardTitle>
                      }
                      <CardText className='linkText'>{description}</CardText>
                    </Col>
                    <Col xs='2'>
                      <img className='angleLink' src={angleLink} alt='' />
                    </Col>
                  </Row>
                </Card></Link>
              )
            })
          }
          <hr className='hr' />
          <h4 className='readMore'>Read more</h4>
          <ul className='addMargin'>
            <li className='li'>
              Getting ready for baby
            </li>
            <li className='li'>
              Sex during pregnancy
            </li>
          </ul>
        </Container>
        <Footer />
      </div>
    )
  }
}

export default YourPregnancy
