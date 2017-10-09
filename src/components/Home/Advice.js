import React, {Component} from 'react'
import { connect } from 'react-redux'
import { Collapse, Navbar, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap'
import { Link } from 'react-router'

class Advice extends Component{

  constructor(props) {
   super(props);

   this.toggleNavbar = this.toggleNavbar.bind(this);
   this.state = {
     collapsed: !(this.props.homeDropdown === this.props.section.header)
   };
 }

 toggleNavbar() {
   const payload = this.props.homeDropdown === this.props.section.header
    ? null
    : this.props.section.header
   this.props.dispatch({type: 'SET_HOME_DROPDOWN', payload: payload})
 }

  render(){

    const dropdownArrow = this.state.collapsed
      ? 'https://image.flaticon.com/icons/svg/61/61041.svg'
      : 'https://image.flaticon.com/icons/svg/60/60799.svg'

    const section = this.props.section

    function renderSubheader(subheader){
      return (
        <NavLink key={subheader.name}>{subheader.name}</NavLink>
      )
    }

    return (
      <div>
        <Navbar color='faded' light>
          <NavbarBrand onClick={this.toggleNavbar} className='advice-header'>
            <span>{section.header}</span>
            <span><img className='dropdown-arrow' src={dropdownArrow} alt=''/></span>
          </NavbarBrand>
          <Collapse isOpen={this.props.homeDropdown === this.props.section.header} navbar>
            <Nav navbar>
              <NavItem>
                {section.subheaders.map(renderSubheader)}
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    )

  }
}

export default connect(state => state)(Advice)
