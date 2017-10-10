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
import './yourPregnancy.css'
import yourPregnancyArticles from './yourPregnancyArticles'
import yourPregnancyImg from '../../img/SectionPages/yourPregnancy.png'
import angleCalendar from '../../img/angle/angle.png'
import angleLink from '../../img/darkAngle/angle@2x.png'
import Footer from '../Footer'

class YourPregnancy extends Component {
  render () {
    return (
      <div>
        <NavBar />
        <img className='yourPregnancyImg' src={yourPregnancyImg} alt='' />
        <Container>
          <h4 className='yourPregnancyTitle'>Your pregnancy</h4>
          <p className='yourPregnancyContent'>This is where you can learn all about your pregnancy. Have a browse
            through the sections below and don’t forget to unlock challenges for
            rewards.</p>
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
            yourPregnancyArticles.map((article, key) => {
              const { title, description } = article
              return (
                <Link to={`/your-pregnancy/${article.id}`}><Card key={key} className='linkCard'>
                  <Row>
                    <Col xs='10'>
                      <CardTitle className='linkTitle'>{title}</CardTitle>
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
          <hr />
          <h4 className='readMore'>Read more</h4>
          <ul>
            <li>
              Getting ready for baby
            </li>
            <li>
              Sex during pregnancy
            </li>
            <li>
              Danger signs
            </li>
            <li>
              Labour & birth
            </li>
          </ul>
        </Container>
        <Footer />
      </div>
    )
  }
}

export default YourPregnancy
