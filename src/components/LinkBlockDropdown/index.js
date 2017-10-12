import React, {Component} from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { Collapse, Container, Card, CardTitle, CardText, Row, Col } from 'reactstrap'

import downAngle from '../../img/downAngle.svg'
import upAngle from '../../img/upAngle.svg'
import './linkBlockDropdown.css'

class LinkBlockDropdown extends Component {
  constructor (props) {
    super(props)
    this.toggleNavbar = this.toggleNavbar.bind(this)
    this.state = {
      collapsed: !(this.props.linkDropdown === this.props.section[0].relatedSection)
    }
  }

  toggleNavbar () {
    const payload = this.props.linkDropdown === this.props.section[0].relatedSection
    ? null
    : this.props.section[0].relatedSection
    this.props.dispatch({type: 'SET_LINK_DROPDOWN', payload: payload})
  }

  render () {
    const dropdownArrow = this.props.linkDropdown === this.props.section[0].relatedSection ? upAngle : downAngle

    let link = ''
    const sectionType = this.props.section[0].relatedSection
    if (sectionType === 'Your Pregnancy') {
      link = 'your-pregnancy'
    } else if (sectionType === 'Pepi Ora Help') {
      link = 'pepi-ora-help'
    } else if (sectionType === 'Support & Help') {
      link = 'support-and-help'
    } else if (sectionType === 'Baby & Toddler') {
      link = 'baby-and-toddler'
    } else if (sectionType === 'Rewards Support') {
      link = 'rewards-support'
    }

    return (
      <Container>
        <Card onClick={this.toggleNavbar} className='home-dropdown'>
          <Row className='home-remove-margin'>
            <Col xs='9'>
              <CardTitle className='dropdown-title'>{this.props.title}</CardTitle>
              <CardText className='dropdown-descText'>{this.props.description}</CardText>
            </Col>
            <Col xs='3' className='dropdown-chevron-col'>
              <span><img className='dropdown-chevron' src={dropdownArrow} alt='' /></span>
            </Col>
          </Row>
        </Card>
        <Collapse isOpen={this.props.linkDropdown === this.props.section[0].relatedSection} card>
          <Card className='home-dropdown-list' card>
            <span>
              {this.props.section.map((article, key) => {
                const title = article.largeTitle ? article.largeTitle : article.title
                return (
                  <div>
                    <Link key={article.title} className='home-dropdown-link' to={`/${link}/${article.id}`}>{title}</Link><br />
                  </div>
                )
              })}
            </span>
          </Card>
        </Collapse>
      </Container>
    )
  }
}

export default connect(state => state)(LinkBlockDropdown)
