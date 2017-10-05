import initialState from '../state'

export default function landingCarousel (state = initialState.landingCarousel, action) {
  switch (action.type) {
    case 'CHANGE_LANDING_DISPLAY':
      return action.payload

    default:
      return state
  }
}
