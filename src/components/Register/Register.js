import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  Container
} from 'reactstrap'

import UserInfo from './UserInfo'
import CheckIfPregnant from './CheckIfPregnant'
import CheckIfChildren from './CheckIfChildren'
import CheckIfMidwife from './CheckIfMidwife'
import PregnancyQuestions from './PregnancyQuestions'
import ChildrenQuestions from './ChildrenQuestions'

class Register extends Component {
  render () {
    const { hasName, isPregnant, dueDate, hasChildren, hasMidwife } = this.props
    return (
      <Container>
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
          isPregnant === 'true' &&
          hasMidwife === null
          ? <CheckIfMidwife />
          : null
        }
        {
          hasName !== null &&
          dueDate === null &&
          hasMidwife !== null &&
          isPregnant === 'true'
          ? <PregnancyQuestions />
          : null
        }
        {
          hasName !== null &&
          isPregnant !== null &&
          hasChildren === null &&
          hasMidwife !== null &&
          dueDate !== null
          ? <CheckIfChildren />
          : null
        }
        {
          hasName !== null &&
          hasChildren === 'true' &&
          isPregnant !== null &&
          hasMidwife !== null &&
          dueDate !== null
          ? <ChildrenQuestions />
          : null
        }
      </Container>
    )
  }
}

export default connect(state => state)(Register)
