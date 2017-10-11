import initialState from '../state'

export default function userRewardIds (state = initialState.userRewardIds, action) {
  switch (action.type) {
    case 'CLAIM_REWARD':
      state.unshift(action.payload.id)
      return state

    case 'CANCEL_REWARD':
      return state.filter((val, i) => val !== action.payload.id)

    default:
      return state
  }
}
