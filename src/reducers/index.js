import {combineReducers} from 'redux'
import passwordShowing from './passwordShowing'

import isPregnant from './isPregnant'
import hasChildren from './hasChildren'
import hasMidwife from './hasMidwife'
import homeDropdown from './homeDropdown'

const reducers = combineReducers({
  isPregnant,
  hasChildren,
  hasMidwife,
  passwordShowing,
  homeDropdown
})

export default reducers
