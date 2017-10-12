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

import NavBar from '../../NavBar'
import '../sectionPage.css'
import pepiOraHelpArticles from './pepiOraHelpArticles'
import pepiOraHelpImg from '../../../img/SectionPages/pepiOraHelp.png'
import angleLink from '../../../img/darkAngle/angle@2x.png'
import Footer from '../../Footer'

class PepiOraHelp extends Component {
  render () {
    return (
      <div>
        <NavBar />
        <img className='bannerImg' src={pepiOraHelpImg} alt='' />
        <Container>
          <h4 className='sectionPageTitle'>How do I use the Pepi Ora app?</h4>
          <p className='sectionPageContent pepiOraDescription'>We designed the app
            with you in mind. Find out how to use all the features below:</p>
          <Link to='rewards-support'><Card className='linkCard'>
            <Row>
              <Col xs='10'>
                <CardTitle className='linkTitle'>
                  Rewards & Points
                </CardTitle>
                <CardText className='linkText'>
                  Learn about points and there uses
                </CardText>
              </Col>
              <Col xs='2'>
                <img className='angleLink' src={angleLink} alt='' />
              </Col>
            </Row>
          </Card></Link>
          {
            pepiOraHelpArticles.map((article, key) => {
              const { title, description } = article
              return (
                <Link to={`/pepi-ora-help/${article.id}`} key={key}><Card className='linkCard'>
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
          <h4 className='sectionPageTitle pepiOraSectionPadding'>More Useful Information</h4>
          <Link to='/pepi-ora-help'><Card className='linkCard'>
            <Row>
              <Col xs='10'>
                <CardTitle className='linkTitle'>
                  About Us
                </CardTitle>
                <CardText className='linkText'>
                  Find out more about us
                </CardText>
              </Col>
              <Col xs='2'>
                <img className='angleLink' src={angleLink} alt='' />
              </Col>
            </Row>
          </Card></Link>
          <Link to='/pepi-ora-help'><Card className='linkCard'>
            <Row>
              <Col xs='10'>
                <CardTitle className='linkTitle'>
                  Profile
                </CardTitle>
                <CardText className='linkText'>
                  Edit your profile and information
                </CardText>
              </Col>
              <Col xs='2'>
                <img className='angleLink' src={angleLink} alt='' />
              </Col>
            </Row>
          </Card></Link>
          <h4 className='sectionPageTitle furtherAssistanceTitle'>Need further assistance?</h4>
          <p className='sectionPageContent'>Just send us an email
            with your question, and we will get back to you ASAP.</p>
          <p className='sectionPageContent furtherAssistanceEmail'>frances.king@nph.org.nz</p>
        </Container>
        <Footer />
      </div>
    )
  }
}

export default PepiOraHelp
