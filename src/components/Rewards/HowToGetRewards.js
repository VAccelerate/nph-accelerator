import React, { Component } from 'react'
import {
  Container,
  NavLink
} from 'reactstrap'
import './howToGetRewards.css'

class HowToGetRewards extends Component {
  render () {
    return (
      <Container>
        <h3 className='htgr-title'>How do I get rewards?</h3>
        <div className='htgr-list'>
          <NavLink className='htgr-item' href=''>Never gonna give you up</NavLink>
          <NavLink className='htgr-item' href=''>Never gonna let you down</NavLink>
          <NavLink className='htgr-item' href=''>Never gonna turn around</NavLink>
          <NavLink className='htgr-item' href=''>And hurt you</NavLink>
          <NavLink className='htgr-item' href=''>Unlock Challenges in app</NavLink>
        </div>
      </Container>
    )
  }
}
export default HowToGetRewards
