import React, { Component } from 'react'
import { connect } from 'react-redux'

import calendarEvents from './calendarEvents'
import Appointment from './Appointment'

class Reward extends Component {
  render () {

    return (
      <div>
        <Appointment />
      </div>
    )
  }
}

export default connect(state => state)(Reward)
