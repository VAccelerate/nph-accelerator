import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  Card,
  Container,
  CardTitle,
  CardBody,
  Button
} from 'reactstrap'

class AddChildren extends Component {

  render () {
    return (
      <Container>
        <Card>
          <CardTitle>
            Enter your childs details
          </CardTitle>
          <CardBody>
            <span>
              <input
                type='text'
                placeholder='Name'
              />
            </span>
              <select>
                <option value='null'>
                  Gender
                </option>
                <option value='male'>
                  Male
                </option>
                <option value='female'>
                  Female
                </option>
              </select>
            <span>
            </span>
          </CardBody>
        </Card>
      </Container>
    )
  }
}

export default connect(state => state)(AddChildren)
