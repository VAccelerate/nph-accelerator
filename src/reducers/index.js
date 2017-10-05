import {combineReducers} from 'redux'

import passwordShowing from './passwordShowing'
import hasName from './hasName'
import isPregnant from './isPregnant'
import hasChildren from './hasChildren'
import hasMidwife from './hasMidwife'
import homeDropdown from './homeDropdown'
import knowDueDate from './knowDueDate'
import dueDate from './dueDate'
import children from './children'
import deleteChildren from './deleteChildren'
import landingCarousel from './landingCarousel'

const reducers = combineReducers({
  hasName,
  isPregnant,
  hasChildren,
  hasMidwife,
  passwordShowing,
  homeDropdown,
  knowDueDate,
  dueDate,
  children,
  deleteChildren,
  landingCarousel
})

export default reducers
