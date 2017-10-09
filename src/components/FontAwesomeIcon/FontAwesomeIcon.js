import PropTypes from 'prop-types'
import React, { Component } from 'react'

class FontAwesomeIcon extends Component {
  render () {
    const {
      className,
      name,
      ...attributes
    } = this.props
    const classes = [
      'fa',
      `fa-${name}`
    ]
    if (className) {
      classes.push(className)
    }
    return (
      <i
        aria-hidden='true'
        className={classes.join(' ')}
        {...attributes}
      />
    )
  }
}

FontAwesomeIcon.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string.isRequired
}

export default FontAwesomeIcon
