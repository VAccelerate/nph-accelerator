import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  Media,
  Container,
  Row,
  Col
} from 'reactstrap'
import FontAwesomeIcon from '../FontAwesomeIcon'
import logo from '../../img/logo.png'
import './footer.css'

class Footer extends Component {

  render () {
    return (
      <div>
        <div className='madeBy'>
          <Container>
            <Row>
              <Col xs='3'>
                <img src={logo} className='footerLogo' alt='Generic placeholder image' />
              </Col>
              <Col xs='9'>
                <div className='footerText'>by Ngati Porou Hauora</div>
              </Col>
            </Row>
          </Container>
        </div>

        <div className='socialIcons'>
          <Container>
            <Row>
              <Col>
                <FontAwesomeIcon name='facebook-square fa-3x' />
              </Col>
              <Col>
                <FontAwesomeIcon name='twitter fa-3x' />
              </Col>
              <Col>
                <FontAwesomeIcon name='instagram fa-3x' />
              </Col>
              <Col>
                <FontAwesomeIcon name='envelope-o fa-3x' />
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    )
  }
}

export default connect(state => state)(Footer)
