import React, { Component } from 'react'
import {
  Container
} from 'reactstrap'
import { Link } from 'react-router-dom'
import './howToGetRewards.css'

class HowToGetRewards extends Component {
  render () {
    return (
      <Container>
        <h3 className='htgr-title'>How do I get rewards?</h3>
        <div className='htgr-list'>
          <Link to='/your-pregnancy/0'><span className='htgr-item'>Midwife visits</span></Link><br />
          <Link to='/support-and-help'><span className='htgr-item'>Doctor check ups</span></Link><br />
          <Link to='/support-and-help'><span className='htgr-item'>Scans</span></Link><br />
          <Link to='/support-and-help'><span className='htgr-item'>Visits with Well Child provider</span></Link><br />
          <Link to='/rewards-support'><span className='htgr-item'>Unlock Challenges in app</span></Link>
        </div>
      </Container>
    )
  }
}
export default HowToGetRewards
