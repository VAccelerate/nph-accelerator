import {combineReducers} from 'redux'

import isPregnant from './isPregnant'
import hasChildren from './hasChildren'
import hasMidwife from './hasMidwife'

const reducers = combineReducers({
  isPregnant,
  hasChildren,
  hasMidwife
})

export default reducers
