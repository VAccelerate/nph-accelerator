import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  Card,
  Container,
  CardTitle,
  CardBody,
  Button
} from 'reactstrap'

class CheckIfPregnant extends Component {
  checkIfPregnant (name, value) {
    this.props.dispatch({
      type: 'IS_PREGNANT',
      payload: value
    })
  }

  render () {
    return (
      <Container>
        <Card className='question-card'>
          <CardTitle className='question-phrase'>
            Are you or your partner expecting a child?
          </CardTitle>
          <CardBody className='question-yes-no'>
            <Button
              className='button-yes-no'
              name='isPregnant'
              onClick={() => this.checkIfPregnant('isPregnant', 'true')}
              color=''
            >Yes</Button>
            <Button
              className='button-yes-no'
              name='isPregnant'
              onClick={() => this.checkIfPregnant('isPregnant', 'false')}
              color=''
              >No</Button>
          </CardBody>
        </Card>
        <Button
          className='skip-question-button'
          onClick={() => this.checkIfPregnant('skipped', 'skipped')}
          color=''
          outline
        >Skip this question</Button>
        <p className='skip-question-description'>
          This information is not relevant to me
        </p>
      </Container>
    )
  }
}

export default connect(state => state)(CheckIfPregnant)
