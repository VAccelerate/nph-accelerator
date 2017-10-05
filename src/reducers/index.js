import {combineReducers} from 'redux'

import passwordShowing from './passwordShowing'
import isPregnant from './isPregnant'
import hasChildren from './hasChildren'
import hasMidwife from './hasMidwife'
import knowDueDate from './knowDueDate'
import dueDate from './dueDate'
import children from './children'

const reducers = combineReducers({
  isPregnant,
  hasChildren,
  hasMidwife,
  passwordShowing,
  knowDueDate,
  dueDate,
  children
})

export default reducers
