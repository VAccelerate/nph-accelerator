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
    const { userName, isPregnant, dueDate, hasChildren, hasMidwife } = this.props
    let display = null
    if (userName === null) {
      return display = <UserInfo />
    } else if (isPregnant === null) {
      return display = <CheckIfPregnant />
    } else if (hasMidwife === null && isPregnant === 'true') {
      return display = <CheckIfMidwife />
    } else if (isPregnant === 'true' && dueDate === null) {
      return display = <PregnancyQuestions />
    } else if (hasChildren === null) {
      return display = <CheckIfChildren />
    } else if (hasChildren === 'true') {
      return display = <ChildrenQuestions />
    }
    return (
      <Container>
        {display}
      </Container>
    )
  }
}

export default connect(state => state)(Register)
