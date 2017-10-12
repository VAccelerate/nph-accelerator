import initialState from '../state'

export default function sectionIndex (state = initialState.sectionIndex, action) {
  switch (action.type) {
    case 'SUBMIT_CHALLENGE':
      const { questionsCorrect, questionsTotal, section, articleId } = action.payload
      state.find(index => {
        return index.section === section
      }).articles[articleId].challengeCompleted = questionsCorrect === questionsTotal
      return state

    default:
      return state
  }
}
