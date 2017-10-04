import {combineReducers} from 'redux'
import passwordShowing from './passwordShowing'

import isPregnant from './isPregnant'
import hasChildren from './hasChildren'
import hasMidwife from './hasMidwife'

const reducers = combineReducers({
  isPregnant,
  hasChildren,
  hasMidwife,
  passwordShowing
})

export default reducers
