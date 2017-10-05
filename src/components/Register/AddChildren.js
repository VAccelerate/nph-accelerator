import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  FormGroup,
  Label,
  Input
} from 'reactstrap'

class AddChildren extends Component {
  constructor (props) {
    super(props)
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.state = {
      name: '',
      dob: '',
      gender: ''
    }
  }

  handleChange (event) {
    const { name, value } = event
    this.setState({
      [name]: value
    })
  }

  handleSubmit (event) {
    event.preventDefault()
    const name = this.state.name
    const dob = this.state.dob
    const gender = this.state.gender
    this.props.addChild(name, dob, gender)
  }

  render () {
    return (
      <div>
        <FormGroup>
          <Input type="text" name="name" id="name" placeholder="Name" onChange={this.handleChange} />
        </FormGroup>
        <FormGroup>
          <Input type="select" name="gender" id="genderSelect" onChange={this.handleChange} >
            <option value="">Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="neither">Prefer not to answer</option>
          </Input>
        </FormGroup>
        <FormGroup>
          <Label for="birthDate">Date of birth</Label>
          <Input type="date" name="dob" id="birthDate" value='' ref='date' placeholder="2017-01-10" />
        </FormGroup>
        <a onClick={this.handleSubmit}>Add Child</a>
      </div>
    )
  }
}

export default connect(state => state)(AddChildren)
