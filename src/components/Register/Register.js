import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  Container
} from 'reactstrap'

import AppBar from './AppBar'
import UserInfo from './UserInfo'
import CheckIfPregnant from './CheckIfPregnant'
import CheckIfChildren from './CheckIfChildren'
import CheckIfMidwife from './CheckIfMidwife'
import PregnancyQuestions from './PregnancyQuestions'
import ChildrenQuestions from './ChildrenQuestions'

import './register.css'

class Register extends Component {
  render () {
    console.log(this.props);
    const { userName, isPregnant, dueDate, hasChildren, hasMidwife } = this.props
    let display = null
    if (userName === null) {
      display = <UserInfo />
    } else if (isPregnant === null) {
      display = <CheckIfPregnant />
    } else if (hasMidwife === null && isPregnant === 'true') {
      display = <CheckIfMidwife />
    } else if (isPregnant === 'true' && dueDate === null) {
      display = <PregnancyQuestions />
    } else if (hasChildren === null) {
      display = <CheckIfChildren />
    } else if (hasChildren === 'true') {
      display = <ChildrenQuestions />
    }
    return (
      <Container className='register'>
        <AppBar />
        {display}
      </Container>
    )
  }
}

export default connect(state => state)(Register)
