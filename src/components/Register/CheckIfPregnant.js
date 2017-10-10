import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  Card,
  Container,
  CardTitle,
  CardBody,
  Button
} from 'reactstrap'
import SkipQuestion from './SkipQuestion'

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
        <Card>
          <CardTitle>
            Are you or your partner expecting a child?
          </CardTitle>
          <CardBody>
            <Button name='isPregnant' onClick={() => this.checkIfPregnant('isPregnant', 'true')} color='secondary'>Yes</Button>{' '}
            <Button name='isPregnant' onClick={() => this.checkIfPregnant('isPregnant', 'false')} color='secondary'>No</Button>
          </CardBody>
          <SkipQuestion onSkip={() => this.checkIfPregnant('skipped', 'skipped')} />
        </Card>
      </Container>
    )
  }
}

export default connect(state => state)(CheckIfPregnant)
