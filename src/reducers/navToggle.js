import initialState from '../state'

export default function register (state = initialState.navToggle, action) {
  switch (action.type) {
    case 'NAV_TOGGLE':
      return action.payload
    default:
      return state
  }
}
