import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  Input,
  Row,
  Col,
  Badge,
  Container
} from 'reactstrap'
import RewardPreview from './RewardPreview'

import rewards from './data.js'
import vodafoneLogo from '../../img/grayscale/vodafone/bitmap@3x.png'
import foursquareLogo from '../../img/grayscale/foursquare/bitmap@3x.png'
import gasLogo from '../../img/grayscale/gasolinealley/bitmap@3x.png'
import './rewards.css'

class Rewards extends Component {
  constructor(props) {
    super(props)
    this.handleChange = this.handleChange.bind(this)

    this.state = {
      searchString: '',
      brandFilter: '',
      categoryFilter: ''
    }
  }

  handleChange(event) {
    const { name, value } = event.target
    this.setState({
      [name]: value
    })
  }

  render () {
    let rewardsToDisplay = rewards.filter(reward => {
      const rewardString = (reward.description +
        ' ' + reward.brand +
        ' ' + reward.title +
        ' ' + reward.description +
        ' ' + reward.points).toLowerCase()
      return (
        rewardString.indexOf(this.state.searchString.toLowerCase()) !== -1
      )}
    )
    rewardsToDisplay = rewardsToDisplay.filter(reward => {
      const brand = reward.brand.toLowerCase()
      return brand.indexOf(this.state.brandFilter.toLowerCase()) !== -1
    })
    rewardsToDisplay = rewardsToDisplay.filter(reward => {
      const category = reward.category.toLowerCase()
      return category.indexOf(this.state.categoryFilter.toLowerCase()) !== -1
    })

    return (
      <div>
        <Container>
          <Row className='pointsHeader'>
            <Col className='pointsHeaderText'>
              Points available
            </Col>
            <Col>
              <Badge className='pointsPill' pill>{this.props.pointsTotal}</Badge>
            </Col>
          </Row>
        </Container>
        <Input className='searchInput'
               onChange={this.handleChange}
               type='text' name='searchString'
               id='searchString'
               placeholder='Type to search'
        />
        <Input
          className='searchDropdownInput'
          onChange={this.handleChange}
          type='select'
          name='categoryFilter'
          id='categoryFilter'>
          <option value=''>Categories</option>
          <option value='mobile'>Mobile</option>
          <option value='food'>Food</option>
          <option value='fuel'>Fuel</option>
        </Input>
        <Input
          className='searchDropdownInput'
          onChange={this.handleChange}
          type='select'
          name='brandFilter'
          id='brandFilter'>
          <option value=''>Brands</option>
          <option value='vodafone'>Vodafone</option>
          <option value='spark'>Spark</option>
          <option value='bp'>BP</option>
          <option value='paknsave'>Pak n Save</option>
        </Input>
        <div className='rewardCount'>
          Showing {rewardsToDisplay.length} of {rewards.length} rewards
        </div>
        {rewardsToDisplay.map((reward, key) => {
          return (
            <RewardPreview reward={reward} key={key} />
          )
        })}
        <Row>
          <Col>
            <div className='partnerText'>
              Some of our partners
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <img src={foursquareLogo} className='partnerLogo' alt='4Square logo' />
          </Col>
          <Col>
            <img src={vodafoneLogo} className='partnerLogo' alt='VF logo' />
          </Col>
        </Row>
        <Row>
          <Col>
            <img src={gasLogo} className='partnerLogo' alt='g.a.s. logo' />
          </Col>
        </Row>
      </div>
    )
  }
}

export default connect(state => state)(Rewards)
