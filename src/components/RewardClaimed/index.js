import React from 'react'
import { connect } from 'react-redux'

import NavBar from '../NavBar'

class RewardClaimed extends React.Component {

  render(){

    return (
      <div>
        for real though right?
      </div>
    )
  }
}

export default connect(state => state)(RewardClaimed)
