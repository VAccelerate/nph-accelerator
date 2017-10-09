import React, {Component} from 'react'
import { connect } from 'react-redux'
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap'
import { Link } from 'react-router'

class NavBar extends Component{
  constructor(props) {
    super(props);

    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: true
    };
  }

  toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }
  render() {
    return (
      <div>
        <Navbar color='faded' light>
          <NavItem className='nav-user'><img src='https://openclipart.org/download/247320/abstract-user-flat-4.svg' className='nav-user-icon'/></NavItem>
          <NavbarBrand href='/' className='nav-home'>Ngati Porou Hauora</NavbarBrand>
          <NavbarToggler onClick={this.toggleNavbar} className='nav-hamburger' />
          <Collapse isOpen={!this.state.collapsed} navbar>
            <Nav navbar>
              <NavItem>
                <NavLink href='#'>Example Link 1</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href='#'>Example Link 2</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

export default connect(state => state)(NavBar)
