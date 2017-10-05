import initialState from '../state'

export default function register (state = initialState.dueDate, action) {
  switch (action.type) {
    case 'DUE_DATE':
      return action.payload
    default:
      return state
  }
}
