import React, { Component } from 'react'
import { connect } from 'react-redux'

import Advice from './Advice'
import data from './homeData'
import Contact from './Contact'
import Points from './Points'
import UserMessage from './UserMessage'
import NavBar from '../NavBar'

class Home extends Component {
  render () {
    return (
      <div>
        <div className='container'>
          <NavBar />
          <UserMessage /><hr/>
          <Points /><hr/>
          {
            this.props.isPregnant === 'false'
            ? null
            : <div><Advice section={data.homepageDropdowns.pregnancy} /><hr/></div>
          }
          {
            this.props.hasChildren === 'false'
            ? null
            : <div><Advice section={data.homepageDropdowns.babyToddler} /><hr/></div>
          }
          <Advice section={data.homepageDropdowns.supportHelp} /><hr/><br/>
        </div>
        <Contact/>
      </div>
    )
  }
}

export default connect(state => state)(Home)
