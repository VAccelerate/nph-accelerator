import initialState from '../state'

export default function challengeResult (state = initialState.challengeResult, action) {
  switch (action.type) {
    case 'SUBMIT_CHALLENGE':
      const newState = {
        correct: action.payload.questionsCorrect,
        total: action.payload.questionsTotal
      }
      return newState

    default:
      return state
  }
}
