import initialState from '../state'

export default function register (state = initialState.children, action) {
  switch (action.type) {
    case 'CHILDREN':
      return [
        ...state,
        {
          child: action.payload
        }
      ]
    default:
      return state
  }
}
