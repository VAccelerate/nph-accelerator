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
  checkIfChildren (name, value) {
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
            <Button name='hasChildren' onClick={() => this.checkIfChildren('hasChildren', 'true')} color='secondary'>Yes</Button>{' '}
            <Button name='hasChildren' onClick={() => this.checkIfChildren('hasChildren', 'false')} color='secondary'>No</Button>
          </CardBody>
          <SkipQuestion onSkip={() => this.checkIfChildren('skipped', 'skipped')} />
        </Card>
      </Container>
    )
  }
}

export default connect(state => state)(CheckIfChildren)
