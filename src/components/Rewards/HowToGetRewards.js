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
          <NavLink className='htgr-item' href=''>Midwife visits</NavLink>
          <NavLink className='htgr-item' href=''>Doctor check ups</NavLink>
          <NavLink className='htgr-item' href=''>Scans</NavLink>
          <NavLink className='htgr-item' href=''>Visits with Well Child provider</NavLink>
          <NavLink className='htgr-item' href=''>Unlock Challenges in app</NavLink>
        </div>
      </Container>
    )
  }
}
export default HowToGetRewards
