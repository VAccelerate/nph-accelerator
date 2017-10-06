import React from 'react'
import { connect } from 'react-redux'
import { Breadcrumb, BreadcrumbItem } from 'reactstrap'

import NavBar from '../NavBar'

class RewardClaimed extends React.Component {

  render(){

    return (
      <div>
        <NavBar />
        <Breadcrumb>
          <BreadcrumbItem active>Back to Rewards</BreadcrumbItem>
        </Breadcrumb>
      </div>
    )
  }
}

export default connect(state => state)(RewardClaimed)
