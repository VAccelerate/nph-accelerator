import React, {Component} from 'react'
import { connect } from 'react-redux'
import { Collapse, Navbar, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap'
import { Link } from 'react-router'

class Points extends Component{

  render(){

    return (
      <div>
        points!
      </div>
    )

  }
}

export default connect(state => state)(Points)
