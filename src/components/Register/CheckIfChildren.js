import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  Card,
  Container,
  CardTitle,
  CardBody,
  Button
} from 'reactstrap'
import { Link } from 'react-router-dom'

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
        <Card className='question-card'>
          <CardTitle className='question-phrase'>
            Do you have any children?
          </CardTitle>
          <CardBody className='question-yes-no' id='question-midwife'>
            <Button
              className='button-yes-no'
              name='hasMidwife'
              onClick={() => this.checkIfChildren('hasChildren', 'true')}
              color=''
              outline
            >Yes</Button>
            <Link to='/home'>
              <Button
                className='button-yes-no'
                name='hasMidwife'
                onClick={() => this.checkIfChildren('hasChildren', 'false')}
                color=''
                outline
              >No</Button>
            </Link>
          </CardBody>
        </Card>
        <Link to='/home'>
          <Button
            className='skip-question-button'
            onClick={() => this.checkIfChildren('skipped', 'skipped')}
            color=''
            outline
          >Skip this question</Button>
        </Link>
        <p className='skip-question-description'>
          This information is not relevant to me
        </p>
      </Container>
    )
  }
}

export default connect(state => state)(CheckIfChildren)
