import React, { Component } from 'react'
import { connect } from 'react-redux'

import NavBar from '../NavBar'
import DateView from './DateView'

class Calendar extends Component {
  render () {
    return (
      <div>
        <NavBar />
        <DateView />
      </div>
    )
  }
}

export default connect(state => state)(Calendar)
