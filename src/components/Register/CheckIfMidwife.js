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

class CheckIfMidwife extends Component {
  checkIfMidwife (name, value) {
    this.props.dispatch({
      type: 'HAS_MIDWIFE',
      payload: value
    })
  }

  render () {
    return (
      <Container>
        <Card>
          <CardTitle>
            Do you have a midwife?
          </CardTitle>
          <CardBody>
            <Button name='hasMidwife' onClick={() => this.checkIfMidwife('hasMidwife', 'true')} color='secondary'>Yes</Button>{' '}
            <Button name='hasMidwife' onClick={() => this.checkIfMidwife('hasMidwife', 'false')} color='secondary'>No</Button>
          </CardBody>
          <SkipQuestion onSkip={() => this.checkIfMidwife('skipped', 'skipped')}/>
        </Card>
      </Container>
    )
  }
}

export default connect(state => state)(CheckIfMidwife)
