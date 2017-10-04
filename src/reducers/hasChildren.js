import initialState from '../state'

export default function register (state = initialState.hasChildren, action) {
  switch (action.type) {
    case 'HAS_CHILDREN':
      return action.payload
    default:
      return state
  }
}
