import initialState from '../state'

export default function register (state = initialState.children, action) {
  switch (action.type) {
    case 'DELETE_CHILDREN':
      return action.payload
    default:
      return state
  }
}
