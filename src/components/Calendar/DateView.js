import React, {Component} from 'react'
import { connect } from 'react-redux'
import DayPicker from 'react-day-picker'
import moment from 'moment'
import 'react-day-picker/lib/style.css'

import calendarEvents from './calendarEvents'
import CalendarDates from './CalendarDates'
import CalendarNav from './CalendarNav'
import CalendarWeekday from './CalendarWeekday'
import './calendar.css'

class DateView extends Component {
  constructor (props) {
    super(props)
    this.handleChange = this.handleChange.bind(this)
    this.state = {
      currentMonth: new Date()
    }
  }

  handleChange (event) {
    this.setState({
      currentMonth: event
    })
  }

  render () {
    const dateDue = this.props.dueDate ? this.props.dueDate.split('/') : ''
    let dueDate = {
      year: Number(dateDue[2]),
      month: (Number(dateDue[1]) - 1),
      day: Number(dateDue[0])
    }

    dueDate.formatted = new Date(dueDate.year, dueDate.month, dueDate.day)

    let edgeDays = []
    let eventDays = []
    let tipDays = []

    calendarEvents.forEach(extractRelevantDates)

    function extractRelevantDates (calendarEvent) {
      if (calendarEvent.type === 'appointment') {
        edgeDays.push(findDateFromBirth(calendarEvent.startDay))
        edgeDays.push(findDateFromBirth(calendarEvent.endDay))
        for (var i = calendarEvent.startDay; i < calendarEvent.endDay; i++) {
          eventDays.push(findDateFromBirth(i))
        }
      }
      if (calendarEvent.type === 'tip') {
        tipDays.push(findDateFromBirth(calendarEvent.startDay))
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
      eventDays: eventDays,
      tipDays: tipDays
    }

    let eventData = []

    calendarEvents.forEach(monthlyEventInfo)

    function monthlyEventInfo (calendarEvent) {
      const startDay = findDateFromBirth(calendarEvent.startDay)
      const endDay = findDateFromBirth(calendarEvent.endDay)
      const eventInfo = {
        title: calendarEvent.title,
        description: calendarEvent.description,
        pageLink: calendarEvent.pageLink,
        type: calendarEvent.type,
        startDay: startDay,
        endDay: endDay,
        weeksOfPreg: calendarEvent.weeksOfPreg
      }
      return eventData.push(eventInfo)
    }

    return (
      <div>
        <DayPicker
          modifiers={modifiers}
          month={this.state.currentMonth}
          onMonthChange={this.handleChange}
          navbarElement={<CalendarNav />}
          weekdayElement={<CalendarWeekday />}
          enableOutsideDays />
        <CalendarDates eventData={eventData} currentMonth={this.state.currentMonth} />
      </div>
    )
  }
}

export default connect(state => state)(DateView)
