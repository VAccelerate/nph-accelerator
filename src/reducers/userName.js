import initialState from '../state'

export default function register (state = initialState.userName, action) {
  switch (action.type) {
    case 'NAME':
      return action.payload
    default:
      return state
  }
}
