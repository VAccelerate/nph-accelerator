import React, {Component} from 'react'
import { connect } from 'react-redux'
import {
  Button,
  Container,
  CardText,
  CardTitle,
  CardBody,
  Input
} from 'reactstrap'
import { Link } from 'react-router-dom'

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
              <div className='passwordInput'>
                <Input
                  type={passwordShowing}
                  name='password'
                  placeholder='Password'
                />
                <div
                  className='showPasswordBtn'
                  onClick={() => dispatch({
                    type: 'TOGGLE_PASSWORD_DISPLAY',
                    payload: passwordShowing
                  })}
                >
                  Show
                </div>
              </div>
              <div>Or</div>
              <div>
                <Link to='/register'>
                  <Button block className='facebookSignUp'>
                    Sign up with Facebook
                  </Button>
                </Link>
              </div>
              <div>
                <Link to='/register'>
                  <Button block className='googleSignUp'>
                    Sign up with Google
                  </Button>
                </Link>
              </div>
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
