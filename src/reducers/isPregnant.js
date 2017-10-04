import initialState from '../state'

export default function register (state = initialState.isPregnant, action) {
  switch (action.type) {
    case 'IS_PREGNANT':
      return action.payload
    default:
      return state
  }
}
