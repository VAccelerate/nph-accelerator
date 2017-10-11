import PropTypes from 'prop-types'
import React from 'react'

class Embedly extends React.Component {
  render () {
    return (
      <div className='responsive-object'>
        <a
          className='embedly-card'
          data-card-controls={0}
          data-card-theme='dark'
          href={this.props.href}
          style={{width: '600px'}}
        >
          Link
        </a>
      </div>
    )
  }
}

Embedly.propTypes = {
  href: PropTypes.string.isRequired
}

export default Embedly
