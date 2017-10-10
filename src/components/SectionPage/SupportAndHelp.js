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
import supportAndHelpArticles from './supportAndHelpArticles'
import supportAndHelpImg from '../../img/SectionPages/supportAndHelp.png'
import heartImg from '../../img/SectionPages/heart.png'
import angleLink from '../../img/darkAngle/angle@2x.png'
import Footer from '../Footer'

class SupportAndHelp extends Component {
  render () {
    return (
      <div>
        <NavBar />
        <img className='bannerImg' src={supportAndHelpImg} alt='' />
        <Container>
          <h4 className='yourPregnancyTitle'>Support & Help</h4>
          <p className='yourPregnancyContent'>It can be hard raising a family,
            we are here to let you know. You are not alone. Below you can find
            valuable information to help you if your having trouble.</p>
          {
            supportAndHelpArticles.map((article, key) => {
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
        </Container>
        <Card className='helpLine'>
          <img className='heartImg' src={heartImg} alt='' />
          <CardTitle className='helpLineTitle'>Samaritans help line</CardTitle>
          <CardText className='helpLineText'>0800 726 66</CardText>
          <CardTitle className='helpLineTitle'>Suicide help line</CardTitle>
          <CardText className='helpLineText'>0800 543 354</CardText>
          <CardTitle className='helpLineTitle'>Help with Depression</CardTitle>
          <CardText className='helpLineText'>0800 111 757</CardText>
        </Card>
        <Footer />
      </div>
    )
  }
}

export default SupportAndHelp
