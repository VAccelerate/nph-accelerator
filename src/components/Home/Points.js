import React, {Component} from 'react'
import { connect } from 'react-redux'
import { Card } from 'reactstrap'

class Points extends Component{

  render(){
    const { pointsTotal } = this.props

    return (
      <div>
        <Card>
          <div className='home-points'>
            <div className='home-points-text'>
              <p>You have {pointsTotal} points</p>
              <p>Check your rewards</p>
            </div>
            <div className='home-points-img'>
              <img src='https://image.flaticon.com/icons/svg/321/321773.svg' alt='' id='trophy-img'/>
            </div>
          </div>
        </Card>
      </div>
    )

  }
}

export default connect(state => state)(Points)
