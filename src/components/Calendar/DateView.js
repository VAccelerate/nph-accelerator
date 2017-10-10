import React, {Component} from 'react'
import { connect } from 'react-redux'
import DayPicker from 'react-day-picker'
import 'react-day-picker/lib/style.css'
import moment from 'moment'

import calendarEvents from './calendarEvents'
import './calendar.css'
import CalendarDates from './CalendarDates'

class DateView extends Component {
  render () {
    const dateDue = this.props.dueDate.split('/')

    let dueDate = {
      year: Number(dateDue[2]),
      month: (Number(dateDue[1]) - 1),
      day: Number(dateDue[0])
    }
    dueDate.formatted = new Date(dueDate.year, dueDate.month, dueDate.day)

    let edgeDays = []
    let eventDays = []

    calendarEvents.forEach(extractRelevantDates)

    function extractRelevantDates (calendarEvent) {
      edgeDays.push(findDateFromBirth(calendarEvent.startDay))
      edgeDays.push(findDateFromBirth(calendarEvent.endDay))
      for (var i = calendarEvent.startDay; i < calendarEvent.endDay; i++) {
        eventDays.push(findDateFromBirth(i))
      }
    }

    function findDateFromBirth (daysPastBirth) {
      return formatDate(moment(dueDate.formatted).add(daysPastBirth, 'days').format('YYYY-MM-D'))
    }

    function formatDate (date) {
      const splitDate = date.split('-')
      const res = new Date(Number(splitDate[0]), (Number(splitDate[1]) - 1), Number(splitDate[2]))
      return res
    }

    const modifiers = {
      edgeDays: edgeDays,
      eventDays: eventDays
    }

    return (
      <div>
        <DayPicker month={new Date(2017, 10)} modifiers={modifiers} />
        <CalendarDates />
      </div>
    )
  }
}

export default connect(state => state)(DateView)
