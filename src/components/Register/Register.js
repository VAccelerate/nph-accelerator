import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  Container
} from 'reactstrap'

import CheckIfPregnant from './CheckIfPregnant'
import CheckIfChildren from './CheckIfChildren'
import CheckIfMidwife from './CheckIfMidwife'

class Register extends Component {
  render () {
    const { isPregnant, hasChildren, hasMidwife } = this.props
    return (
      <Container>
        {
          isPregnant === null
          ? <CheckIfPregnant />
          : null
        }
        {
          isPregnant !== null &&
          hasChildren === null
          ? <CheckIfChildren />
          : null
        }
        {
          isPregnant !== null &&
          hasChildren !==null &&
          hasMidwife === null
          ? <CheckIfMidwife />
          : null
        }


      </Container>
    )
  }
}

export default connect(state => state)(Register)
