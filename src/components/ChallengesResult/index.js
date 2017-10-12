import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { Button } from 'reactstrap'

import hamburgerX from '../../img/hamburgerX.svg'
import resultsTrophy from '../../img/resultsTrophy.svg'
import resultsX from '../../img/resultsX.svg'
import './challengesResult.css'

class ChallengesResult extends Component {
  render () {
    const pathname = window.location.pathname
    const section = pathname.split('/')[2]
    const articleId = pathname.split('/')[3]

    const resultsData = {
      pass: {
        styleId: 'results-pass',
        header: 'Congratulations!!',
        subheader: 'You won 100 points',
        description: 'You can use rewards to earn money back on groceries, fuel, firewood and more. Get saving today.',
        buttons: [
          {
            name: 'View rewards',
            link: '/rewards'
          }
        ]
      },
      fail: {
        styleId: 'results-fail',
        header: 'Unlucky!!',
        subheader: 'No points this time',
        description: 'Good effort, don’t give up now. You can either try again or have a read over the content and learn some more.',
        buttons: [
          {
            name: 'Try Again',
            link: `/challenges/${section}/${articleId}`
          },
          {
            name: 'Learn more',
            link: `/${section}/${articleId}`
          }
        ]
      }
    }
    const { challengeResult } = this.props

    const challengeScore = {
      score: challengeResult.correct,
      total: challengeResult.total
    }
    const result = challengeScore.score === challengeScore.total
      ? 'pass'
      : 'fail'
    const { styleId, header, subheader, description, buttons } = resultsData[result]
    const bannerImg = result === 'pass'
      ? resultsTrophy
      : resultsX

    const bannerImgId = `banner-img-${result}`

    function renderButton (button) {
      return (
        <Link to={button.link} key={button.name}>
          <Button
            className='results-button'
            outline
            color='danger'
          >{button.name}</Button><br />
        </Link>
      )
    }

    return (
      <div>
        <div className='results-top-section'>
          <Link to={`/${section}/${articleId}`} >
            <img className='X-img' src={hamburgerX} alt='Hamburger menu icon' />
          </Link>
        </div>
        <div className='result-banner' id={styleId}>
          <div className='results-banner-left'>
            <p className='banner-header'>{header}</p>
            <p className='banner-subheader'>{subheader}</p>
            <p className='banner-score'>
              You scored {challengeScore.score}/{challengeScore.total}
            </p>
          </div>
          <div className='results-banner-right'>
            <img id={bannerImgId} src={bannerImg} alt='' />
          </div>
        </div>
        <div className='results-bottom-section'>
          <p className='result-description'>{description}</p>
          <div>{buttons.map(renderButton)}</div>
        </div>
      </div>
    )
  }
}

export default connect(state => state)(ChallengesResult)
