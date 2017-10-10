import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  Container,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap'
import './earnMorePoints.css'

class EarnMorePoints extends Component {
  render () {
    const section = this.props.section

    function renderSubheader (subheader) {
      return (
        <NavItem key={subheader.name}>
          <NavLink key={subheader.name} href={subheader.url} className={subheader.name}>{subheader.descText}</NavLink>
        </NavItem>
      )
    }
    function shuffleArray (object) {
      let newObject = object.challenges.filter(function (category) {
        return category.isCompleted === false
      })
      let i = newObject.length - 1
      for (; i > -1; i--) {
        const j = Math.floor(Math.random() * (i + 1))
        const temp = newObject[i]
        newObject[i] = newObject[j]
        newObject[j] = temp
      }

      if (newObject.length > 4) {
        newObject = newObject.slice(0, 4)
      } else if (newObject.length === 0) {
        return [{name: 'nothing', descText: "You've completed everything for now!", url: null, isCompleted: false}]
      }
      return newObject
    }

    return (
      <Container>
        <h3 className='EMP-title'>Unlock Challenges</h3>
        <div className='EMP-list'>
          <Nav>
            {shuffleArray(section).map(renderSubheader)}
          </Nav>
        </div>
      </Container>
    )
  }
}
export default connect(state => state)(EarnMorePoints)
