import initialState from '../state'

export default function linkDropdown (state = initialState.linkDropdown, action) {
  switch (action.type) {
    case 'SET_LINK_DROPDOWN':
      return action.payload
    default:
      return state
  }
}
