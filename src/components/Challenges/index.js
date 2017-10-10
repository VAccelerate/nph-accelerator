import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { Input, Button, Label } from 'reactstrap'

import './challenges.css'
import gamepad from '../../img/gamepad.svg'
import hamburgerX from '../../img/hamburgerX.svg'

class Challenges extends Component {
  render () {
    return (
      <div className='challenges'>
        <div>
          <Link to='/' >
            <img className='X-img' src={hamburgerX} />
          </Link>
          <img className='gamepad-img' src={gamepad} />
        </div>
        <div className='challenge-messages'>
          <p className='challenge-title' >
            Ready for your Alcohol pregnancy points challenge?
          </p>
          <p className='challenge-description' >
            Unlock points to win rewards.
          </p>
        </div>
        <div className='question-messages'>
          <p className='question-title'>Question 1 of 5</p>
          <p className='question-description'>
            Which of the following statements is true?
          </p>
        </div>
        <div className='answers'>
          <div className='answer-option'>
            <Label check>
              <span><Input type='radio' name='radio2'/></span>
              <span className='answer-text'>You can drink when pregnant</span><br/>
            </Label>
          </div>
          <div className='answer-option'>
            <Label check>
              <span><Input type='radio' name='radio2'/></span>
              <span className='answer-text'>You can smoke while pregnant</span><br/>
            </Label>
          </div>
          <div className='answer-option'>
            <Label check>
              <span><Input type='radio' name='radio2'/></span>
              <span className='answer-text'>You can take drugs while pregnant</span><br/>
            </Label>
          </div>
          <div className='answer-option'>
            <Label check>
              <span><Input type='radio' name='radio2'/></span>
              <span className='answer-text'>
              Any form of drinking, smoking or taking drugs, no matter how little
              can cause severe problems with your unborn baby.
              </span>
            </Label>
          </div>
          <Button outline color='danger' className='answer-submit-button'>Continue</Button>
        </div>
      </div>
    )
  }
}

export default connect(state => state)(Challenges)
