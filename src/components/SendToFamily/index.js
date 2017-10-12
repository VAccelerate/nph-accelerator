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
import hamburgerX from '../../img/hamburgerX.svg'
import { Link } from 'react-router-dom'
import './sendToFamily.css'

class SendToFamily extends Component {
  constructor (props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.isValid = this.isValid.bind(this)
    this.state = {
      email: ''
    }
  }

  handleSubmit () {

  }

  handleChange (event) {
    const { value } = event.target
    this.setState({
      email: value
    })
  }

  isValid () {
    return (this.state.email.length > 0)
  }

  render () {
    return (
      <Container className='send-to-family'>
        <Link to={'/home'} >
          <img className='X-img' src={hamburgerX} alt='Hambuger menu icon' />
        </Link>
        <Card className='question-card' id='email-card'>
          <CardTitle className='question-phrase'>Enter your friends email</CardTitle>
          <CardBody >
            <Form>
              <Input
                type='text'
                name='name'
                placeholder='Email'
                onChange={this.handleChange}
                required
            />
              <br />
              <br />
              <a
                href={`mailto:${this.state.email}?subject=Pepi%20Ora%20App&body=Check out our free app! Unlock prizes and rewards and advice and support for you and your Whanau here: https://pepi-ora.netlify.com`}
              >
                <Button
                  className='continue-button'
                  disabled={!this.isValid()}
                  onClick={this.handleSubmit}
                  color=''
              >
                Send
              </Button></a>
            </Form>
          </CardBody>
        </Card>
      </Container>
    )
  }
}
export default connect(state => state)(SendToFamily)
