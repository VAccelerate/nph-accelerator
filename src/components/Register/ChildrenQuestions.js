import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  Card,
  Container,
  CardTitle,
  CardBody,
  Button,
  FormGroup,
  Label,
  Input
} from 'reactstrap'
import { Link } from 'react-router-dom'
import DatePicker from 'react-datepicker'
import moment from 'moment'
import 'react-datepicker/dist/react-datepicker.css'

class SkipQuestion extends Component {
  constructor (props) {
    super(props)
    this.handleChange = this.handleChange.bind(this)
    this.addChild = this.addChild.bind(this)
    this.deleteChild = this.deleteChild.bind(this)
    this.dob = this.dob.bind(this)

    this.state = {
      name: '',
      dob: '',
      gender: '',
      birthDate: moment()
    }
  }

  handleChange (event) {
    const { name, value } = event.target
    this.setState({
      [name]: value
    })
  }

  addChild () {
    const name = this.state.name
    const dob = this.state.dob
    const gender = this.state.gender
    const child = {
      name: name,
      dob: dob,
      gender: gender
    }
    this.props.dispatch({
      type: 'CHILDREN',
      payload: child
    })
    this.setState({
      name: '',
      dob: '',
      gender: ''
    })
  }

  deleteChild (key) {
    let children = this.props.children
    children = children.splice(key, 1)
    this.props.dispatch({
      type: 'DELETE_CHILDREN',
      payload: children
    })
  }

  isValid () {
    const validDate = this.isDateValid()

    if (this.state.name.length > 1 &&
      this.state.gender !== '' &&
      validDate) {
      return true
    } else {
      return false
    }
  }

  isDateValid () {
    return !moment().isBefore(this.state.birthDate)
  }

  dob (date) {
    const dob = moment(date).format('DD/MM/YYYY')
    this.setState({
      dob: dob,
      birthDate: date
    })
  }

  render () {
    return (
      <div>
        {
          this.props.hasChildren === 'true'
          ? <Card>
              <CardTitle>
                Enter your childs details
              </CardTitle>
              <CardBody>
                {
                  this.props.children.map((child, key) => {
                    return (
                      <div key={key}>
                        <h4>
                          {child.name}
                        </h4>
                        <p>{child.gender}, DoB: {child.dob}</p>
                        <Button onClick={() => this.deleteChild(key)}>Remove</Button>
                      </div>
                    )
                  })
                }
                <div>
                  <FormGroup>
                    <Input type='text' name='name' id='name' value={this.state.name} placeholder='Name' onChange={this.handleChange} />
                  </FormGroup>
                  <FormGroup>
                    <Input type='select' name='gender' value={this.state.gender} id='genderSelect' onChange={this.handleChange} >
                      <option value=''>Gender</option>
                      <option value='male'>Male</option>
                      <option value='female'>Female</option>
                      <option value='neither'>Prefer not to answer</option>
                    </Input>
                  </FormGroup>
                  <FormGroup>
                    <Label for='dob'>Date of birth</Label>
                    <DatePicker
                        selected={this.state.birthDate}
                        onChange={this.dob}
                        dateFormat='DD/MM/YYYY'
                    />
                    {
                      this.isDateValid()
                      ? null
                      : <p>Pick a date in the past</p>
                    }
                  </FormGroup>
                  <Button disabled={!this.isValid()} onClick={this.addChild}>Add Child</Button>
                </div>
              </CardBody>
              <Link to={'/home'}><Button>Continue</Button></Link>
            </Card>
          : null
        }
      </div>
    )
  }
}

export default connect(state => state)(SkipQuestion)
