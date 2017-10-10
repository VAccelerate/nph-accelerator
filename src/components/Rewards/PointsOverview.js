import React, {Component} from 'react'
import { connect } from 'react-redux'
import { Card, Container, Col, Row } from 'reactstrap'
import './pointsOverview.css'

class PointsOverview extends Component {
  render () {
    const { pointsTotal } = this.props
    // Once data is available create dynamic generator for these fields
    const moneySaved = 300
    const pointsToReward = 200
    const challengesCompleted = 25
    const rank = {
      icon: 'https://image.flaticon.com/icons/svg/179/179587.svg',
      title: 'Bronze'
    }

    return (
      <div>
        <Container>
          <Card className='points-overview'>
            <Row className='points-overview-row'>
              <Col className='points-earned-col' xs='6'>
                <div className='points-earned'>
                  <p className='points-overview-total'>{pointsTotal}</p>
                  <h4 className='points-overview-header'>Points Earned</h4>
                  <div className='points-overview-rank'>
                    <img
                      src={rank.icon}
                      alt=''
                      className='points-overview-rank-img'
                      />
                    <p className='points-overview-rank-title'>{rank.title}</p>
                  </div>
                </div>
              </Col>
              <Col className='points-stats-col' xs='6'>
                <div className='points-saved'>
                  <h4 className='points-saved-header'>Money Saved</h4>
                  <p className='points-saved-subheader'>${moneySaved}</p>
                </div>
                <div className='points-tilnext'>
                  <h4 className='points-tilnext-header'>Til Next Reward</h4>
                  <p className='points-tilnext-subheader'>{pointsToReward}pts</p>
                </div>
              </Col>
            </Row>
            <Row className='points-challenges'>
              <h4 className='points-challenges-header'>{challengesCompleted}/40 Challenges Complete</h4>
            </Row>
          </Card>
        </Container>
      </div>
    )
  }
}

export default connect(state => state)(PointsOverview)
