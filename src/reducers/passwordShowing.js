import initialState from '../state'
export default function passwordShowing (state = initialState.passwordShowing, action) {
  switch (action.type) {
    case 'TOGGLE_PASSWORD_DISPLAY':
      const newState = state === 'password'
        ? 'text'
        : 'password'

      return newState

    default:
      return state
  }
}
