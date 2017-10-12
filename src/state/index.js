import sectionIndex from './sectionIndex'

const initialState = {
  userName: null,
  isPregnant: null,
  hasChildren: null,
  hasMidwife: null,
  passwordShowing: 'password',
  linkDropdown: null,
  knowDueDate: null,
  knowLmp: null,
  dueDate: null,
  children: [],
  landingCarousel: 0,
  userRewardIds: [1, 2],
  navToggle: false,
  pointsTotal: 200,
  sectionIndex: sectionIndex,
  rewardsActiveTab: 'shop',
  challengeResult: {
    correct: null,
    total: null
  }
}

export default initialState
