import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  Container,
  Row,
  Col,
  Card,
  CardText
} from 'reactstrap'
import { Link } from 'react-router-dom'

import './articlePage.css'
import NavBar from '../../NavBar'
import Footer from '../../Footer'
import Embedly from '../../Embedly'
import yourPregnancyArticles from '../YourPregnancy/yourPregnancyArticles'
import supportAndHelpArticles from '../SupportAndHelp/supportAndHelpArticles'
import babyAndToddlerArticles from '../BabyAndToddler/babyAndToddlerArticles'
import pepiOraHelpArticles from '../PepiOraHelp/pepiOraHelpArticles'
import rewardsSupportArticles from '../RewardsSupport/rewardsSupportArticles'
import backImg from '../../../img/angle/angle-left.svg'
import redAngleLeft from '../../../img/angle/red-angle-left.png'
import redAngleRight from '../../../img/angle/red-angle-right.png'
import challengeData from '../../Challenges/challengeData'

class ArticlePage extends Component {
  constructor (props) {
    super(props)
    this.state = {
      atPageBottom: false,
      navigated: false
    }
    this.handleScroll = this.handleScroll.bind(this)
  }

  handleScroll () {
    const windowHeight = 'innerHeight' in window ? window.innerHeight : document.documentElement.offsetHeight
    const body = document.body
    const html = document.documentElement
    const docHeight = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight)
    const windowBottom = windowHeight + window.pageYOffset
    if (windowBottom >= docHeight) {
      this.setState({
        atPageBottom: true
      })
    } else {
      this.setState({
        atPageBottom: false
      })
    }
  }

  componentDidMount () {
    window.addEventListener('scroll', this.handleScroll)
    window.scrollTo(0, 0)
  }

  componentWillUnmount () {
    window.removeEventListener('scroll', this.handleScroll)
  }

  componentDidUpdate () {
    const pathname = window.location.pathname
    const section = pathname.split('/')[1]
    const articleId = pathname.split('/')[2]
    if (this.state.atPageBottom && !this.state.navigated && challengeData[section][articleId].questions.length && !this.props.sectionIndex.find(index => {
      return index.section === section
    }).articles[articleId].challengeCompleted) {
      this.setState({
        navigated: true
      })
      setTimeout(() => {
        this.props.history.push(`/challenges${window.location.pathname}`)
      }, 2000)
    }
  }
  render () {
    const section = window.location.pathname
    const splitUrl = section.split('/')
    const link = splitUrl[1]
    const id = splitUrl[2]
    const idPlusOne = Number(id) + 1
    const idMinusOne = Number(id) - 1
    let data = []
    if (link === 'your-pregnancy') {
      data = yourPregnancyArticles
    } else if (link === 'baby-and-toddler') {
      data = babyAndToddlerArticles
    } else if (link === 'support-and-help') {
      data = supportAndHelpArticles
    } else if (link === 'pepi-ora-help') {
      data = pepiOraHelpArticles
    } else if (link === 'rewards-support') {
      data = rewardsSupportArticles
    }
    const relevantData = data[id]
    const { title, content, youtubeUrl, largeTitle, img, relatedSection, readMore } = relevantData
    return (
      <div>
        <div ref='topOfPage' />
        <NavBar />
        <Link to={`/${link}`}>
          <Row className='articleRemoveMargin'>
            <Col xs='2'>
              <img className='backImg' src={backImg} alt='' />
            </Col>
            <Col className='back' xs='10'>
              Back to {relatedSection}
            </Col>
          </Row>
        </Link>
        {
          youtubeUrl
          ? <div className='youtubeEmbed'>
            <Embedly href={youtubeUrl} />
          </div>
          : <img className='mainImg' src={img} alt='' />
        }
        <Container>
          {
            largeTitle
            ? <div>
              <Row className='scrollAge articleRemoveMargin'>
                <Col xs='2'>
                  {
                    Number(id) === 0
                    ? null
                    : <Link to={`/${link}/${idMinusOne}`}><img className='redAngle' src={redAngleLeft} alt='' /></Link>
                    }
                </Col>
                <Col xs='8'>
                  <h4 className='ageScroll'>{largeTitle}</h4>
                </Col>
                <Col xs='2'>
                  {
                    id < (data.length - 1)
                    ? <Link to={`/${link}/${idPlusOne}`}><img className='redAngle' src={redAngleRight} alt='' /></Link>
                    : null
                  }
                </Col>
              </Row>
            </div>
            : null
          }
          <h4 className='articleTitle'>{title}</h4>
          {content}
          {
            id < (data.length - 1)
            ? (
              <Link
                to={`/${link}/${idPlusOne}`}
                onClick={() => window.scrollTo(0, 0)}
              >
                <Card className='nextButton'>
                  <CardText className='nextText'>
                  Next article >
                  </CardText>
                </Card>
              </Link>
            )
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
                      <Link to={item.link} key={key}>
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

export default connect(state => state)(ArticlePage)
