import React, {Component} from 'react'
import { connect } from 'react-redux'
import { Button } from 'reactstrap'

class SignUp extends Component{
  render(){
    const { passwordShowing, dispatch } = this.props

    return (
      <div>
        <div className='emailSignUp'>
          <input
            type='text'
            name='email'
            placeholder='email address'
          />
          <br/>
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
          <br/>
          <Button>
            Register
          </Button>
        </div>
      </div>
    )

  }
}

export default connect(state => state)(SignUp)
