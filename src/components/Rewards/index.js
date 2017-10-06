import React from 'react'

import NavBar from '../NavBar'
import PointsOverview from './PointsOverview'
import HowToGetRewards from './HowToGetRewards'

const Home = () => {
  return (
    <div>
      <NavBar />
      <PointsOverview />
      <HowToGetRewards/>
    </div>
  )
}

export default Home
