import React, { Component } from 'react'
import { connect } from 'react-redux'
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
import rewardsSupportArticles from './rewardsSupportArticles'
import rewardsSupportImg from '../../../img/SectionPages/rewardsSupport.png'
import trophyImg from '../../../img/SectionPages/trophyImg.png'
import angleLink from '../../../img/darkAngle/angle@2x.png'
import Footer from '../../Footer'

class RewardsSupport extends Component {
  render () {
    const userPoints = this.props.pointsTotal
    return (
      <div>
        <NavBar />
        <img className='bannerImg' src={rewardsSupportImg} alt='' />
        <Container>
          <h4 className='sectionPageTitle'>How do I get and use rewards?</h4>
          <p className='sectionPageContent rewardsSupportMargin'>You can win
            points by completing challenges within the app. Or you gain points
            by visiting your healthcare professional. Find out more below:</p>
          {
            rewardsSupportArticles.map((article, key) => {
              const { title, description } = article
              return (
                <div key={key}>
                  {
                    key !== 3
                    ? null
                    : <h4 className='sectionPageTitle pepiOraSectionPadding'>More Useful Information</h4>
                  }
                  <Link to={`/rewards-support/${article.id}`}><Card key={key} className='linkCard'>
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
                </div>
              )
            })
          }
          <h4 className='sectionPageTitle furtherAssistanceTitle'>Where can I use my rewards?</h4>
          <p className='sectionPageContent'>You can claim rewards at lots of
            great local business. We aim to help you and your family with the
            essentials. Things like fuel and groceries.</p>
          <Card className='pointsCard'>
            <Row>
              <Col xs='9'>
                <p className='pointsCardTitle'>You have {userPoints} points</p>
                <p className='pointsCardText'>Check out your rewards</p>
              </Col>
              <Col xs='3'>
                <img className='pointsCardTrophyImg' src={trophyImg} alt='trophy img' />
              </Col>
            </Row>
          </Card>
        </Container>
        <Footer />
      </div>
    )
  }
}

export default connect(state => state)(RewardsSupport)
