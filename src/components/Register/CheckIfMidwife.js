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
  checkIfMidwife (name, value) {
    this.props.dispatch({
      type: 'HAS_MIDWIFE',
      payload: value
    })
  }

  render () {
    return (
      <Container>
        <Card className='question-card'>
          <CardTitle className='question-phrase'>
            Do you have a midwife?
          </CardTitle>
          <CardBody className='question-yes-no' id='question-midwife'>
            <Button
              className='button-yes-no'
              name='hasMidwife'
              onClick={() => this.checkIfMidwife('hasMidwife', 'true')}
              color=''
              outline
            >Yes</Button>
            <Button
              className='button-yes-no'
              name='hasMidwife'
              onClick={() => this.checkIfMidwife('hasMidwife', 'false')}
              color=''
              outline
            >No</Button>
          </CardBody>
        </Card>
        <Button
          className='skip-question-button'
          onClick={() => this.checkIfMidwife('skipped', 'skipped')}
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

export default connect(state => state)(CheckIfMidwife)
