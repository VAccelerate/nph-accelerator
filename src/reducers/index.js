import {combineReducers} from 'redux'
import passwordShowing from './passwordShowing'

import hasName from './hasName'
import isPregnant from './isPregnant'
import hasChildren from './hasChildren'
import hasMidwife from './hasMidwife'

const reducers = combineReducers({
  hasName,
  isPregnant,
  hasChildren,
  hasMidwife,
  passwordShowing
})

export default reducers
