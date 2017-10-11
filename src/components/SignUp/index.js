import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  Button,
  Container,
  CardText,
  CardTitle,
  CardBody,
  Input,
  Row,
  Col
} from 'reactstrap'
import { Link } from 'react-router-dom'
import FontAwesomeIcon from '../FontAwesomeIcon'

import './index.css'

class SignUp extends Component {
  render () {
    const { passwordShowing, dispatch } = this.props

    return (
      <div>
        <Container>
          <CardBody className='signUpForm'>
            <CardTitle className='signUpHeading'>Sign up</CardTitle>
            <CardText className='emailSignUp'>
              <Input
                type='text'
                name='email'
                placeholder='Email address'
              />
              <span className='passwordInput'>
                <Input
                  type={passwordShowing}
                  name='password'
                  placeholder='Password'
                />
                <span
                  className='showPasswordBtn'
                  onClick={() => dispatch({
                    type: 'TOGGLE_PASSWORD_DISPLAY',
                    payload: passwordShowing
                  })}
                >
                  Show
                </span>
              </span>
              <span className='orText'>Or</span>
              <span>
                <Link to='/register'>
                  <Button block className='facebookSignUp'>
                    <Row>
                      <Col xs='2'>
                        <FontAwesomeIcon name='facebook pull-left' />
                      </Col>
                      <Col xs='10'>
                        Sign up with Facebook
                      </Col>
                    </Row>
                  </Button>
                </Link>
              </span>
              <span>
                <Link to='/register'>
                  <Button block className='googleSignUp'>
                    <Row>
                      <Col xs='2'>
                        <FontAwesomeIcon name='google-plus pull-left' />
                      </Col>
                      <Col xs='10'>
                        Sign up with Google
                      </Col>
                    </Row>
                  </Button>
                </Link>
              </span>
            </CardText>
          </CardBody>
          <div className='alreadyHaveAccount'>
            Already have an account? <Link className='alreadyHaveAccountLink' to='login'>Log in</Link>
          </div>
        </Container>
      </div>
    )
  }
}

export default connect(state => state)(SignUp)
