import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  Container
} from 'reactstrap'

import UserInfo from './UserInfo'
import CheckIfPregnant from './CheckIfPregnant'
import CheckIfChildren from './CheckIfChildren'
import CheckIfMidwife from './CheckIfMidwife'
import RelevantQuestions from './RelevantQuestions'

class Register extends Component {
  render () {
    const { hasName, isPregnant, hasChildren, hasMidwife } = this.props
    return (
      <Container>
        <RelevantQuestions />
        {
          hasName === null
          ? <UserInfo />
          : null
        }
        {
          hasName !== null &&
          isPregnant === null
          ? <CheckIfPregnant />
          : null
        }
        {
          hasName !== null &&
          isPregnant !== null &&
          hasChildren === null
          ? <CheckIfChildren />
          : null
        }
        {
          hasName !== null &&
          isPregnant !== null &&
          hasChildren !==null &&
          hasMidwife === null
          ? <CheckIfMidwife />
          : null
        }
        {
          isPregnant !== null &&
          hasChildren !==null &&
          hasMidwife !== null
          ? <RelevantQuestions />
          : null
        }
      </Container>
    )
  }
}

export default connect(state => state)(Register)
