import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  Card,
  Container,
  CardTitle,
  CardBody,
  Button,
  Form
} from 'reactstrap'

class UserInfo extends Component {

  checkUserName (event) {
    event.preventDefault()
    const name = this.userName.value
    this.props.dispatch({
      type: 'HAS_NAME',
      payload: name
    })
  }

  render () {
    return (
      <Container>
        <Card>
          <CardTitle>User Information</CardTitle>
          <CardBody>
          <Form>
            <input
              type='text'
              name='userName'
              ref={(input) => this.userName = input}
              placeholder='Please Enter Your Name Here'
              required
            />
            <br/>
            <br/>
            <Button color='primary' onClick={this.checkUserName.bind(this)}>submit</Button>
          </Form>
          </CardBody>
        </Card>
      </Container>
    )
  }
}
export default connect(state => state)(UserInfo)
