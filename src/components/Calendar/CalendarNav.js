import React from 'react'

import calendarPrev from '../../img/calendarPrev.svg'
import calendarNext from '../../img/calendarNext.svg'

const CalendarNav = ({
  onPreviousClick,
  onNextClick,
  className
}) => {
  const styleLeft = {
    float: 'left'

  }
  const styleRight = {
    float: 'right'
  }
  return (
    <div className={className}>
      <img src={calendarNext} style={styleRight} onClick={() => onNextClick()} alt='Calendar next icon' />
      <img src={calendarPrev} style={styleLeft} onClick={() => onPreviousClick()} alt='Calendar back icon' />
    </div>
  )
}

export default CalendarNav
