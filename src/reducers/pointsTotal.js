import initialState from '../state'

export default function pointsTotal (state = initialState.pointsTotal, action) {
  switch (action.type) {

    case 'CLAIM_REWARD':
      state -= action.payload.points
      return state

    default:
      return state
  }
}
