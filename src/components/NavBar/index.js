import React, {Component} from 'react'
import { connect } from 'react-redux'
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap'
import { Link } from 'react-router'
import { slide as Menu } from 'react-burger-menu'
import FontAwesomeIcon from '../FontAwesomeIcon'
import nav from './styling.js'

class NavBar extends Component{
  constructor(props) {
    super(props)
    this.toggleNavbar = this.toggleNavbar.bind(this)
    this.state = {
      toggle: false
    }
  }

  toggleNavbar() {
    const toggle = !this.state.toggle
    this.setState({
      toggle: toggle
    })
    this.props.dispatch({
      type: 'NAV_TOGGLE',
      payload: toggle
    })
  }

  render() {
    return (
      <div>
        <Menu
          left
          isOpen={this.props.navToggle}
          styles={ nav }
          disableOverlayClick={true}
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
          <NavbarToggler onClick={this.toggleNavbar} style={{border: 'none'}} />
          <NavbarBrand href='/home' className='nav-home'>Ngati Porou Hauora</NavbarBrand>
          <NavItem className='nav-user'><img src='https://openclipart.org/download/247320/abstract-user-flat-4.svg' className='nav-user-icon'/></NavItem>
        </Navbar>
      </div>
    )
  }
}

export default connect(state => state)(NavBar)
