import React, {Component} from 'react'
import { connect } from 'react-redux'
import { Collapse, NavItem, NavLink, Container, Card, CardTitle, CardText, Row, Col } from 'reactstrap'
import downAngle from '../../img/downAngle.svg'
import upAngle from '../../img/upAngle.svg'
import './linkBlockDropdown.css'

class LinkBlockDropdown extends Component {
  constructor (props) {
    super(props)

    this.toggleNavbar = this.toggleNavbar.bind(this)
    this.state = {
      collapsed: !(this.props.linkDropdown === this.props.section.header)
    }
  }

  toggleNavbar () {
    const payload = this.props.linkDropdown === this.props.section.header
    ? null
    : this.props.section.header
    this.props.dispatch({type: 'SET_LINK_DROPDOWN', payload: payload})
  }

  render () {
    const dropdownArrow = this.state.collapsed
      ? downAngle
      : upAngle

    const section = this.props.section

    function renderSubheader (subheader) {
      return (
        <NavLink key={subheader.name} href={subheader.link}>{subheader.name}</NavLink>
      )
    }

    return (
      <Container>
        <Card onClick={this.toggleNavbar} className='dropdown'>
          <Row>
            <Col xs='9'>
              <CardTitle className='dropdown-title'>{section.header}</CardTitle>
              <CardText className='dropdown-descText'>{section.descText}</CardText>
            </Col>
            <Col xs='3' className='dropdown-chevron-col'>
              <span><img className='dropdown-chevron' src={dropdownArrow} alt='' /></span>
            </Col>
          </Row>
        </Card>
        <Collapse isOpen={this.props.linkDropdown === this.props.section.header} card>
          <Card className='dropdown-list' card>
            <NavItem>
              {section.subheaders.map(renderSubheader)}
            </NavItem>
          </Card>
        </Collapse>
      </Container>
    )
  }
}

export default connect(state => state)(LinkBlockDropdown)
