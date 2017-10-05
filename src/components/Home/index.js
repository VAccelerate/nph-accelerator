import React from 'react'
import Advice from './Advice'
import data from './homeData'
import Contact from './Contact'
import Points from './Points'

const Home = () => {
  return (
    <div>
      <div className='container'>
        <Points />
        <Advice section={data.homepageDropdowns.pregnancy} />
        <Advice section={data.homepageDropdowns.babyToddler} />
        <Advice section={data.homepageDropdowns.supportHelp} />
      </div>
      <br/>
      <Contact/>
    </div>
  )
}

export default Home
