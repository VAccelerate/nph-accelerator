import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  Container
} from 'reactstrap'




class RelevantQuestions extends Component {
  render () {
    const { isPregnant, hasChildren, hasMidwife } = this.props
    if (isPregnant === null || hasChildren === null || hasMidwife === null) {
      return null
    }
    return (
      <Container>

      </Container>
    )
  }
}

export default connect(state => state)(RelevantQuestions)
