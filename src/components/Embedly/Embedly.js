import PropTypes from 'prop-types'
import React from 'react'

class Embedly extends React.Component {
  render () {
    return (
      <div>
        <a
          className='embedly-card'
          data-card-controls={0}
          data-card-theme='dark'
          href={this.props.href}
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
