import React, {Component} from 'react'
import { connect } from 'react-redux'
import { Navbar, NavItem } from 'reactstrap'
import { slide as Menu } from 'react-burger-menu'
import FontAwesomeIcon from '../FontAwesomeIcon'
import { Link } from 'react-router-dom'
import nav from './styling.js'
import './navBar.css'
import navName from '../../img/navName.png'
import hamburgerX from '../../img/hamburgerX.svg'

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
          <a style={{position: 'absolute', top: 15, right: 35}} onClick={this.toggleNavbar}>
            <img src={hamburgerX} />
          </a>
          <Link to='/home'><p id='home' className='menu-item' onClick={this.toggleNavbar}>Home</p></Link>
          <Link to='/rewards'><p id='rewards' className='menu-item' onClick={this.toggleNavbar}>Rewards</p></Link>
          <Link to='/calendar'><p id='calendar' className='menu-item' onClick={this.toggleNavbar}>Calendar</p></Link>
          <Link to='/your-pregnancy'><p id='pregnancy' className='menu-item' onClick={this.toggleNavbar}>Your Pregnancy</p></Link>
          <Link to='/baby-and-toddler'><p id='babyAndToddler' className='menu-item' onClick={this.toggleNavbar}>Baby & Toddler</p></Link>
          <Link to='/support-and-help'><p id='supportAndHelp' className='menu-item' onClick={this.toggleNavbar}>Support & Help</p></Link>
          <Link to='/pepi-ora-help'><p id='pepiOraHelp' className='menu-item' onClick={this.toggleNavbar}>Pepi Ora Help</p></Link>
          <Link to='/'><p id='contact' className='menu-item' onClick={this.toggleNavbar}>Contact</p></Link>
        </Menu>
        <Navbar color='faded' light>
          <NavItem onClick={this.toggleNavbar}>
            <FontAwesomeIcon className='hamburger-icon' name='bars' />
          </NavItem>
          <NavItem>
            <Link to='/home' className='nav-link-to'>
              <img src={navName} alt='' className='nav-name' />
            </Link>
          </NavItem>
          <NavItem className='nav-icons'>
            <Link to='/points' className='nav-link-to'>
              <FontAwesomeIcon className='nav-icon' name='trophy' />
            </Link>
            <Link to='/calendar' className='nav-link-to'>
              <FontAwesomeIcon className='nav-icon' name='calendar' />
            </Link>
            <Link to='/' className='nav-link-to'>
              <FontAwesomeIcon className='nav-icon' name='user-o' />
            </Link>
          </NavItem>
        </Navbar>
      </div>
    )
  }
}

export default connect(state => state)(NavBar)
