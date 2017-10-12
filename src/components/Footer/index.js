import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  Container,
  Row,
  Col
} from 'reactstrap'
import logo from '../../img/logo.png'
import './footer.css'

class Footer extends Component {
  render () {
    return (
      <div>
        <Container>
          <a
            href='https://www.facebook.com/ngatiporouhauora/'
            target='_blank'
            rel='noopener noreferrer'
            className='footerWebLink'
          >
            <Row className='footer'>
              <Col xs='3'>
                <img src={logo} className='footerLogo' alt='Footer NPH logo' />
              </Col>
              <Col xs='9'>
                <div className='footerText'>by Ngati Porou Hauora</div>
              </Col>
            </Row>
          </a>
        </Container>
      </div>
    )
  }
}

export default connect(state => state)(Footer)
