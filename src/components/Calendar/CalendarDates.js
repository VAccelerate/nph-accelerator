import React, { Component } from 'react'
import { connect } from 'react-redux'

import calendarEvents from './calendarEvents'
import Appointment from './Appointment'
import Tip from './Tip'

class Reward extends Component {
  render () {

    return (
      <div>
        <Appointment />
        <Tip />
      </div>
    )
  }
}

export default connect(state => state)(Reward)
