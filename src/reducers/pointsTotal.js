import initialState from '../state'

export default function pointsTotal (state = initialState.pointsTotal, action) {
  switch (action.type) {
    case 'SUBMIT_CHALLENGE':
      if (action.payload.questionsCorrect === action.payload.questionsTotal) {
        state += 100
      }
      return state

    case 'CLAIM_REWARD':
      state -= action.payload.points
      return state

    case 'CANCEL_REWARD':
      state += action.payload.points
      return state

    default:
      return state
  }
}
