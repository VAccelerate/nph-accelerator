import React, { Component } from 'react'
import { connect } from 'react-redux'
import Contact from './Contact'
import Points from './Points'
import UserMessage from './UserMessage'
import NavBar from '../NavBar'
import LinkBlockDropdown from '../LinkBlockDropdown'
import Footer from '../Footer'
import Partners from '../Partners'

import yourPregnancyArticles from '../SectionPage/YourPregnancy/yourPregnancyArticles'
import babyAndToddlerArticles from '../SectionPage/BabyAndToddler/babyAndToddlerArticles'
import supportAndHelpArticles from '../SectionPage/SupportAndHelp/supportAndHelpArticles'

class Home extends Component {
  render () {
    return (
      <div>
        <NavBar />
        <UserMessage />
        <Points />
        {
            this.props.isPregnant === 'false'
            ? null
            : <div><LinkBlockDropdown section={yourPregnancyArticles} title='Pregnancy' description='Help with your pregnancy' /></div>
          }
        {
            this.props.hasChildren === 'false'
            ? null
            : <div><LinkBlockDropdown section={babyAndToddlerArticles} title='Baby & Toddler' description='Help with your kids' /></div>
        }
        <LinkBlockDropdown section={supportAndHelpArticles} title='Support & Help' description='Let us help you' /><br />
        <Contact />
        <Partners />
        <Footer />
      </div>
    )
  }
}

export default connect(state => state)(Home)
