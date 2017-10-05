import React from 'react'

import './landingPage.css'
import SignUp from '../signUp'
import NavBar from '../NavBar'

const LandingPage = () => {
  return (
    <div>
      <div className='container'>
        <NavBar />
        <SignUp />
      </div>
    </div>
  )
}

export default LandingPage
