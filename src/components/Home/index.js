import React, { Component } from 'react'
import { connect } from 'react-redux'

import data from './homeData'
import Contact from './Contact'
import Points from './Points'
import UserMessage from './UserMessage'
import NavBar from '../NavBar'
import LinkBlockDropdown from '../LinkBlockDropdown'

class Home extends Component {
  render () {
    return (
      <div>
        <div className='container'>
          <NavBar />
          <UserMessage /><hr />
          <Points />
          {
            this.props.isPregnant === 'false'
            ? null
            : <div><LinkBlockDropdown section={data.homepageDropdowns.pregnancy} /></div>
          }
          {
            this.props.hasChildren === 'false'
            ? null
            : <div><LinkBlockDropdown section={data.homepageDropdowns.babyToddler} /></div>
          }
          <LinkBlockDropdown section={data.homepageDropdowns.supportHelp} /><br />
        </div>
        <Contact />
      </div>
    )
  }
}

export default connect(state => state)(Home)
