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

class CheckIfChildren extends Component {
  checkIfPregnant (name, value) {
    this.props.dispatch({
      type: 'HAS_CHILDREN',
      payload: value
    })
  }

  render () {
    return (
      <Container>
        <Card>
          <CardTitle>
            Do you have any children?
          </CardTitle>
          <CardBody>
            <Button name='hasChildren' onClick={() => this.checkIfPregnant('hasChildren', 'true')} color='secondary'>Yes</Button>{' '}
            <Button name='hasChildren' onClick={() => this.checkIfPregnant('hasChildren', 'false')} color='secondary'>No</Button>
          </CardBody>
          <SkipQuestion onSkip={() => this.checkIfPregnant('skipped', 'skipped')} />
        </Card>
      </Container>
    )
  }
}

export default connect(state => state)(CheckIfChildren)
