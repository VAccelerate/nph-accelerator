import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { Input, Button, Label } from 'reactstrap'

import './challenges.css'
import gamepad from '../../img/gamepad.svg'
import hamburgerX from '../../img/hamburgerX.svg'
import challengeData from './challengeData'

class Challenges extends Component {
  constructor (props) {
    super(props)
    this.selectAnswer = this.selectAnswer.bind(this)
    this.submitAnswer = this.submitAnswer.bind(this)

    this.state = {
      answerSelected: null,
      questionNumber: 0,
      questionsCorrect: 0
    }
  }

  componentDidMount () {
    window.scrollTo(0, 0)
  }

  componentWillMount () {
    const pathname = window.location.pathname
    const section = pathname.split('/')[2]
    const articleId = pathname.split('/')[3]
    const { history, sectionIndex } = this.props
    if (
      sectionIndex.find(index => {
        return index.section === section
      }).articles[articleId].challengeCompleted
    ) {
      history.push('/rewards')
    }
  }

  submitAnswer () {
    const pathname = window.location.pathname
    const section = pathname.split('/')[2]
    const articleId = pathname.split('/')[3]
    if (this.state.answerSelected === challengeData[section][articleId].questions[0].correct) {
      this.setState({
        questionsCorrect: this.state.questionsCorrect + 1
      })
    }
    this.setState({
      questionNumber: this.state.questionNumber + 1,
      answerSelected: null
    })
  }

  selectAnswer (number) {
    this.setState({
      answerSelected: number
    })
  }

  render () {
    const pathname = window.location.pathname
    const section = pathname.split('/')[2]
    const articleId = pathname.split('/')[3]
    const question = challengeData[section][articleId].questions[this.state.questionNumber] || {
      question: null,
      answers: [],
      correct: null
    }
    if (!question.question) {
      this.props.dispatch({
        type: 'SUBMIT_CHALLENGE',
        payload: {
          section: section,
          articleId: articleId,
          questionsCorrect: this.state.questionsCorrect,
          questionsTotal: challengeData[section][articleId].questions.length
        }
      })
      this.props.history.push(`${pathname}/result`)
    }
    return (
      <div className='challenges'>
        <div ref='topOfPage' />
        <div>
          <Link to={`/${section}/${articleId}`} >
            <img className='X-img' src={hamburgerX} alt='Hambuger menu icon' />
          </Link>
          <img className='gamepad-img' src={gamepad} alt='Game controller icon' />
        </div>
        <div className='challenge-messages'>
          <p className='challenge-title' >
            Ready for your {challengeData[section][articleId].title} points challenge?
          </p>
          <p className='challenge-description' >
            Unlock points to win rewards.
          </p>
        </div>
        <div className='question-messages'>
          <p className='question-title'>
            Question {this.state.questionNumber + 1} of {challengeData[section][articleId].questions.length}
          </p>
          <p className='question-description'>
            {question.question}
          </p>
        </div>
        <div className='answers'>
          {question.answers.map((answer, i) => {
            return (
              <div
                className='answer-option'
                key={i}
                onClick={() => this.selectAnswer(i)}
              >
                <Label check>
                  <span><Input
                    type='radio'
                    name='radio2'
                  /></span>
                  <span className='answer-text'>{answer}</span><br />
                </Label>
              </div>
            )
          })}
          <Button
            onClick={this.submitAnswer}
            outline
            color='danger'
            className='answer-submit-button'
          >Continue</Button>
        </div>
      </div>
    )
  }
}

export default connect(state => state)(Challenges)
