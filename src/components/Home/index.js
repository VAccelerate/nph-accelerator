import React from 'react'
import Advice from './Advice'
import data from './homeData'
import Contact from './Contact'
import Points from './Points'
import UserMessage from './UserMessage'
import NavBar from '../NavBar'

const Home = () => {
  return (
    <div>
      <div className='container'>
        <NavBar />
        <UserMessage /><hr/>
        <Points /><hr/>
        <Advice section={data.homepageDropdowns.pregnancy} /><hr/>
        <Advice section={data.homepageDropdowns.babyToddler} /><hr/>
        <Advice section={data.homepageDropdowns.supportHelp} /><hr/><br/>
      </div>
      <Contact/>
    </div>
  )
}

export default Home
