import React, {Component} from 'react'
import { connect } from 'react-redux'
import { Navbar, NavItem } from 'reactstrap'
import navName from '../../img/navName.png'
import './register.css'

class AppBar extends Component {

  render () {
    return (
      <div className='app-bar'>
        <Navbar>
          <NavItem>
              <img src={navName} alt='' className='app-name' />
          </NavItem>
        </Navbar>
      </div>
    )
  }
}

export default connect(state => state)(AppBar)
