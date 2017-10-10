import React, { Component } from 'react'
import { connect } from 'react-redux'
import moment from 'moment'

import Appointment from './Appointment'
import Tip from './Tip'

class Reward extends Component {
  render () {
    const eventData = this.props.eventData
    const currentMonth = this.props.currentMonth

    let relevantDates = eventData.filter((event) => {
      const compare = moment(currentMonth).add(1, 'M')._d
      const startMinusOneDay = moment(currentMonth).subtract(1, 'd')._d
      const startTrue = moment(event.startDay).isBefore(moment(compare)) && moment(event.startDay).isAfter(startMinusOneDay)
      const endTrue = moment(event.endDay).isBefore(moment(compare)) && moment(event.endDay).isAfter(startMinusOneDay)
      return (startTrue || endTrue)
    })

    const tipData = relevantDates.filter((date) => {
      return (date.type === 'tip')
    })

    const appointmentData = relevantDates.filter((date) => {
      return (date.type === 'appointment')
    })
    return (
      <div>
        {
          appointmentData.map((appointment, key) => {
            return <Appointment key={key} appointmentInfo={appointment} />
          })
        }
        {
          tipData.map((tip, key) => <Tip key={key} tipInfo={tip} />)
        }
        {
          appointmentData.length === 0 && tipData.length === 0
          ? <p> You do not have any appointments this month. </p>
          : null
        }

      </div>
    )
  }
}

export default connect(state => state)(Reward)
