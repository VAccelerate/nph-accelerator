import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  Card,
  Container,
  CardTitle,
  CardBody,
  Button
} from 'reactstrap'

class CheckIfMidwife extends Component {
  checkIfPregnant (name, value) {
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
            <Button name='hasMidwife' onClick={() => this.checkIfPregnant('hasMidwife', true)} value={true} color='secondary'>Yes</Button>{' '}
            <Button name='hasMidwife' onClick={() => this.checkIfPregnant('hasMidwife', false)} value={false} color='secondary'>No</Button>
          </CardBody>
        </Card>
      </Container>
    )
  }
}

export default connect(state => state)(CheckIfMidwife)
