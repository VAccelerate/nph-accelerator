import initialState from '../state'

export default function homeDropdown (state = initialState.homeDropdown, action) {
  switch (action.type) {
    case 'SET_HOME_DROPDOWN':
      return action.payload
    default:
      return state
  }
}
