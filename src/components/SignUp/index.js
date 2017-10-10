import React, {Component} from 'react'
import { connect } from 'react-redux'
import { Button } from 'reactstrap'
import { Link } from 'react-router-dom'

class SignUp extends Component {
  render () {
    const { passwordShowing, dispatch } = this.props

    return (
      <div>
        <h2>Sign up</h2>
        <div className='emailSignUp'>
          <input
            type='text'
            name='email'
            placeholder='email address'
          />
          <br />
          <input
            type={passwordShowing}
            name='password'
            placeholder='password'
          />
          <span
            onClick={() => dispatch({
              type: 'TOGGLE_PASSWORD_DISPLAY',
              payload: passwordShowing
            })}
            >
            show
          </span>
          <br />
          <Link to='/register'><Button>
            Register
          </Button></Link>
        </div>
        <div className='socialSignUp'>
          <Button>Sign in with Facebook</Button><br />
          <Button>Sign in with Google</Button>
        </div>
        <div className='login'>
          <span>already have an account?</span><span> Log in</span>
        </div>
      </div>
    )
  }
}

export default connect(state => state)(SignUp)
