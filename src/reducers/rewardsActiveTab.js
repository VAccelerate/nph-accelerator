import initialState from '../state'

export default function register (state = initialState.rewardsActiveTab, action) {
  switch (action.type) {
    case 'REWARDS_ACTIVE_TAB':
      return action.payload
    default:
      return state
  }
}
