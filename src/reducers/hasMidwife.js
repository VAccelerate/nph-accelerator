import initialState from '../state'

export default function register (state = initialState.hasMidwife, action) {
  switch (action.type) {
    case 'HAS_MIDWIFE':
      return action.payload
    default:
      return state
  }
}
