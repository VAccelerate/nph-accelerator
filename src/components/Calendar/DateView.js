import React, {Component} from 'react'
import { connect } from 'react-redux'
import DayPicker from 'react-day-picker'
import 'react-day-picker/lib/style.css'
import moment from 'moment'

import calendarEvents from './calendarEvents'
import './calendar.css'

class DateView extends Component{

  render() {

    let edgeDays = []
    let eventDays = []

    console.log(moment(21/10/2017).add(3, 'd').add(12, 'hours')._d)
    console.log(new Date(2017, 10, 19))

    const modifiers = {
      edgeDays: [new Date(2017, 10, 19), new Date(2017, 10, 24), moment(24/10/2017).add(3, 'd')._d],
      eventDays: [new Date(2017, 10, 20), new Date(2017, 10, 21)]
    }
    return <DayPicker month={new Date(2017, 10)} modifiers={modifiers} />
  }
}

export default connect(state => state)(DateView)
