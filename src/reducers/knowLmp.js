import initialState from '../state'

export default function register (state = initialState.knowDueDate, action) {
  switch (action.type) {
    case 'KNOW_LMP':
      return action.payload
    default:
      return state
  }
}
