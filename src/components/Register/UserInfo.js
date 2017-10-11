import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  Card,
  Container,
  CardTitle,
  CardBody,
  Button,
  Form,
  Input
} from 'reactstrap'

class UserInfo extends Component {
  constructor (props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.isValid = this.isValid.bind(this)
    this.state = {
      name: ''
    }
  }

  handleSubmit () {
    this.props.dispatch({
      type: 'NAME',
      payload: this.state.name
    })
  }

  handleChange (event) {
    const { name, value } = event.target
    this.setState({
      [name]: value
    })
  }

  isValid () {
    return (this.state.name.length > 0)
  }

  render () {
    return (
      <Container>
        <Card className='question-card'>
          <CardTitle className='question-phrase'>Enter your name</CardTitle>
          <CardBody >
            <Form>
              <Input
                type='text'
                name='name'
                placeholder='Name'
                onChange={this.handleChange}
                required
            />
              <br />
              <br />
              <Button
                className='continue-button'
                disabled={!this.isValid()}
                onClick={this.handleSubmit}
                color=''
              >
                Continue
              </Button>
            </Form>
          </CardBody>
        </Card>
      </Container>
    )
  }
}
export default connect(state => state)(UserInfo)
