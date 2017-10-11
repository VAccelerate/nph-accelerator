import React, { Component } from 'react'
import {
  Container,
  Row,
  Col,
  Card,
  CardText
} from 'reactstrap'
import { Link } from 'react-router-dom'

import './articlePage.css'
import NavBar from '../NavBar'
import Footer from '../Footer'
import Embedly from '../Embedly'
import yourPregnancyArticles from './yourPregnancyArticles'
import supportAndHelpArticles from './supportAndHelpArticles'
import babyAndToddlerArticles from './babyAndToddlerArticles'
import backImg from '../../img/angle/angle-left.svg'
import redAngleLeft from '../../img/angle/red-angle-left.png'
import redAngleRight from '../../img/angle/red-angle-right.png'

class ArticlePage extends Component {
  render () {
    const section = window.location.pathname
    const splitUrl = section.split('/')
    const link = splitUrl[1]
    const id = splitUrl[2]
    const idPlusOne = Number(id) + 1
    let data = []
    if (link === 'your-pregnancy') {
      data = yourPregnancyArticles
    } else if (link === 'baby-and-toddler') {
      data = babyAndToddlerArticles
    } else if (link === 'support-and-help') {
      data = supportAndHelpArticles
    }
    const relevantData = data[id]
    const { title, content, youtubeUrl, largeTitle, img, relatedSection, readMore } = relevantData
    return (
      <div>
        <NavBar />
        <Link to={`/${link}`}>
          <Row>
            <Col xs='2'>
              {
                youtubeUrl
                ? <div className='youtubeEmbed'><Embedly href={youtubeUrl} /></div>
                : <img className='backImg' src={backImg} alt='' />
              }
            </Col>
            <Col className='back' xs='10'>
              Back to {relatedSection}
            </Col>
          </Row>
        </Link>
        <img className='mainImg' src={img} alt='' />
        <Container>
          {
            largeTitle
            ? <div>
              <Row className='scrollAge'>
                <Col xs='2'>
                  <img className='redAngle' src={redAngleLeft} alt='' />
                </Col>
                <Col xs='8'>
                  <h4 className='ageScroll'>{largeTitle}</h4>
                </Col>
                <Col xs='2'>
                  <img className='redAngle' src={redAngleRight} alt='' />
                </Col>
              </Row>
            </div>
            : null
          }
          <h4 className='articleTitle'>{title}</h4>
          {content}
          {
            id < data.length
            ? <Link to={`/${link}/${idPlusOne}`}><Card className='nextButton'><CardText className='nextText'>Next article > </CardText></Card></Link>
            : null
          }
          <hr className='hr' />
          {
            readMore
            ? <div>
              <h4 className='readMore'>Read more</h4>
              <ul className='addMargin'>
                {
                  readMore.map((item, key) => {
                    return (
                      <Link to={item.link}>
                        <li className='li'>
                          {item.title}
                        </li>
                      </Link>
                    )
                  })
                }
              </ul>
            </div>
            : null
          }
        </Container>
        <Footer />
      </div>
    )
  }
}

export default ArticlePage
