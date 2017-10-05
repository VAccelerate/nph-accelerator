import React from 'react'

import Advice from './Advice'
import data from './homeData'

const Home = () => {
  return (
    <div>
      <div className='container'>
        <Advice section={data.homepageDropdowns.pregnancy} />
        <Advice section={data.homepageDropdowns.babyToddler} />
        <Advice section={data.homepageDropdowns.supportHelp} />
      </div>
    </div>
  )
}

export default Home
