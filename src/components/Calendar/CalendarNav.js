import React, {Component} from 'react'

import calendarPrev from '../../img/calendarPrev.svg'
import calendarNext from '../../img/calendarNext.svg'


const CalendarNav = ({
  onPreviousClick,
  onNextClick,
  className,
  localeUtils,
  date
}) => {
  const styleLeft = {
    float: 'left',

  }
  const styleRight = {
    float: 'right',
  }
  return (
    <div className={className}>
      <img src={calendarNext} style={styleRight} onClick={() => onNextClick()} />
      <img src={calendarPrev} style={styleLeft} onClick={() => onPreviousClick()} />
    </div>
  );
}

export default CalendarNav
