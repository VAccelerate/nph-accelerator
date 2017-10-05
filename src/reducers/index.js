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

const reducers = combineReducers({
  hasName,
  isPregnant,
  hasChildren,
  hasMidwife,
  passwordShowing,
  homeDropdown,
  knowDueDate,
  dueDate,
  children
})

export default reducers
