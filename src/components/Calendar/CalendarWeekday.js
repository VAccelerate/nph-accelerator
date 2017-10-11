import React from 'react'

const CalendarWeekday = ({
  className,
  weekday
}) => {
  const weekdays = ['S', 'M', 'T', 'W', 'T', 'F', 'S']
  return (
    <div className={className}>
      {weekdays[weekday]}
    </div>
  )
}

export default CalendarWeekday
