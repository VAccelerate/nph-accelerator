import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  Button
} from 'reactstrap'

class SkipQuestion extends Component {
  skipQuestion () {
    const type = this.props.type
    this.props.dispatch({
      type: {type},
      payload: 'skipped'
    })
  }

  render () {
    return (
      <div>
        <Button onClick={this.props.onSkip}>Skip</Button><br />
      </div>
    )
  }
}

export default connect(state => state)(SkipQuestion)
