import initialState from '../state'

export default function userRewardIds (state = initialState.userRewardIds, action) {
  switch (action.type) {
    case 'CLAIM_REWARD':
      state.unshift(action.payload.id)
      return state

    default:
      return state
  }
}
