import initialState from '../state'

export default function register (state = initialState.hasName, action) {
  switch (action.type) {
    case 'HAS_NAME':
      return action.payload
    default:
      return state
  }
}
