import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  Button
} from 'reactstrap'

class SkipQuestion extends Component {
  skipQuestion () {
    const type = this.props.type
    console.log(type, 'type')
    this.props.dispatch({
      type: {type},
      payload: 'skipped'
    })
  }

  render () {
    console.log(this.props)
    return (
      <Button onClick={this.props.onSkip}>Skip</Button>
    )
  }
}

export default connect(state => state)(SkipQuestion)
