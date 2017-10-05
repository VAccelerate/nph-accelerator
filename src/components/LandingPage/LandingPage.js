import React from 'react'

import './landingPage.css'
import SignUp from '../signUp'
import NavBar from '../NavBar'
import Carousel from './Carousel'

const LandingPage = () => {
  return (
    <div>
      <div className='container'>
        <NavBar />
        <Carousel />
        <SignUp />
      </div>
    </div>
  )
}

export default LandingPage
