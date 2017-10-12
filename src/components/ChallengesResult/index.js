import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { Button } from 'reactstrap'

import resultsData from './resultsData'

import hamburgerX from '../../img/hamburgerX.svg'
import resultsTrophy from '../../img/resultsTrophy.svg'
import resultsX from '../../img/resultsX.svg'
import './challengesResult.css'

class ChallengesResult extends Component {
  render () {
    const challengeScore = {
      score: 5,
      total: 5
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
    console.log('id is: ', bannerImgId)

    return (
      <div>
        <div className='results-top-section'>
          <Link to='/' >
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
