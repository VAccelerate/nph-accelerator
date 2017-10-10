import React, {Component} from 'react'
import { connect } from 'react-redux'
import { Navbar, NavItem } from 'reactstrap'
import { Link } from 'react-router-dom'
import { slide as Menu } from 'react-burger-menu'
import FontAwesomeIcon from '../FontAwesomeIcon'
import nav from './styling.js'
import './navBar.css'
import navName from '../../img/navName.png'

class NavBar extends Component {
  constructor (props) {
    super(props)
    this.toggleNavbar = this.toggleNavbar.bind(this)
    this.state = {
      toggle: false
    }
  }

  toggleNavbar () {
    const toggle = !this.state.toggle
    this.setState({
      toggle: toggle
    })
    this.props.dispatch({
      type: 'NAV_TOGGLE',
      payload: toggle
    })
  }

  render () {
    return (
      <div className='nav-bar'>
        <Menu
          left
          isOpen={this.props.navToggle}
          styles={nav}
          disableOverlayClick
          customCrossIcon={false}
          customBurgerIcon={false}>
          <a style={{position: 'absolute', top: 5, right: 30}} onClick={this.toggleNavbar}><FontAwesomeIcon name='close' /></a>
          <a id='home' className='menu-item' href='/home' onClick={this.toggleNavbar}>Home</a>
          <a id='babyAndToddler' className='menu-item' href='#' onClick={this.toggleNavbar}>Baby & Toddler</a>
          <a id='pregnancy' className='menu-item' href='#' onClick={this.toggleNavbar}>Pregnancy</a>
          <a id='rewards' className='menu-item' href='/rewards' onClick={this.toggleNavbar}>Rewards</a>
          <a id='calendar' className='menu-item' href='/calendar' onClick={this.toggleNavbar}>Calendar</a>
          <a id='supportAndHelp' className='menu-item' href='#' onClick={this.toggleNavbar}>Support & Help</a>
          <a id='myPoints' className='menu-item' href='/points' onClick={this.toggleNavbar}>My Rewards</a>
          <a id='contact' className='menu-item' href='#' onClick={this.toggleNavbar}>Contact</a>
        </Menu>
        <Navbar color='faded' light>
          <NavItem onClick={this.toggleNavbar}>
            <FontAwesomeIcon className='hamburger-icon' name='bars' />
          </NavItem>
          <NavItem>
            <Link to='/home' className='nav-link-to'>
              <img src={navName} className='nav-name' />
            </Link>
          </NavItem>
          <NavItem className='nav-icons'>
            <Link to='/points' className='nav-link-to'>
              <FontAwesomeIcon className='nav-icon' name='trophy' />
            </Link>
            <Link to='/calendar' className='nav-link-to'>
              <FontAwesomeIcon className='nav-icon' name='calendar' />
            </Link>
            <Link to='/#' className='nav-link-to'>
              <FontAwesomeIcon className='nav-icon' name='user-o' />
            </Link>
          </NavItem>
        </Navbar>
      </div>
    )
  }
}

export default connect(state => state)(NavBar)
