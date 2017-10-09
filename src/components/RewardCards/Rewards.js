import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  Input,
  Row,
  Col,
  Badge,
  Container
} from 'reactstrap'

import rewards from './data.js'
import rewardImg from '../../img/rewardImgPlaceholder.png'
import RewardPreview from './RewardPreview'

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
            <RewardPreview rewardImg={rewardImg} reward={reward} key={key} />
          )
        })}
      </div>
    )
  }
}

export default connect(state => state)(Rewards)
