import React from 'react'

const SignUp = () => {
  const passwordType = 'password'
  function togglePasswordDisplay() {
    let passwordType = passwordType === 'password'
      ? 'text'
      : 'password'
  }
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
          type={passwordType}
          name='password'
          placeholder='password'
        />
        <span
          onClick={() => togglePasswordDisplay()}
        >
          show
        </span>
        <br/>
        <button>
          Register
        </button>
      </div>
    </div>
  )
}

export default SignUp
