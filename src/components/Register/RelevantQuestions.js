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
import DatePicker from 'react-datepicker';
import moment from 'moment';

import 'react-datepicker/dist/react-datepicker.css';

class RelevantQuestions extends Component {
  constructor (props) {
    super(props)
    this.handleChange = this.handleChange.bind(this)
    this.addChild = this.addChild.bind(this)
    this.deleteChild = this.deleteChild.bind(this)
    this.dueDate = this.dueDate.bind(this)
    this.lmpDate = this.lmpDate.bind(this)
    this.dob = this.dob.bind(this)

    this.state = {
      name: '',
      dob: '',
      gender: '',
      dueDate: moment(),
      lmpDate: moment(),
      birthDate: moment()
    }
  }

  handleChange (event) {
    const { name, value } = event.target
    this.setState({
      [name]: value
    })
  }

  checkIfKnowDueDate (name, value) {
    this.props.dispatch({
      type: 'KNOW_DUE_DATE',
      payload: value
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
    if (this.state.name.length > 1 && this.state.gender !== '') {
      return true
    } else {
      return false
    }
  }

  isDateValid () {
    return moment().isBefore(this.state.dueDate)
  }

  dueDate (date) {
    this.setState({
      dueDate: date
    })
    const due = moment(date).format('DD/MM/YYYY')
    this.props.dispatch({
      type: 'DUE_DATE',
      payload: due
    })
  }

  lmpDate (date) {
    this.setState({
      lmpDate: date
    })
    const lmp = moment(date).format('DD/MM/YYYY')
    this.props.dispatch({
      type: 'LMP_DATE',
      payload: lmp
    })
  }

  dob (date) {
    const dob = moment(date).format('DD/MM/YYYY')
    this.setState({
      dob: dob
    })
  }

  render () {
    return (
      <Container>
        {
          this.props.isPregnant === 'true'
          ? <Card>
            <CardTitle>
              Do you know your due date?
              <Button name='knowDueDate' onClick={() => this.checkIfKnowDueDate('knowDueDate', true)} color='secondary'>Yes</Button>{' '}
              <Button name='knowDueDate' onClick={() => this.checkIfKnowDueDate('knowDueDate', false)} color='secondary'>No</Button>
            </CardTitle>
            <CardBody>
              {
                this.props.knowDueDate
                ? <FormGroup>
                  <Label for='dueDate'>Due date</Label>
                  <DatePicker
                      selected={this.state.dueDate}
                      onChange={this.dueDate}
                      dateFormat="DD/MM/YYYY"
                  />
                  {
                    this.isDateValid()
                    ? null
                    : <p>Pick a date in the future</p>
                  }
                </FormGroup>
                : null
              }
              {
                this.props.knowDueDate === false
                ? <FormGroup>
                    <Label for='lmpDate'>Do you the first day of your last period?</Label>
                    <DatePicker
                        selected={this.state.lmpDate}
                        onChange={this.lmpDate}
                        dateFormat="DD/MM/YYYY"
                    />
                    {
                      !this.isDateValid()
                      ? null
                      : <p>Pick a date in the past</p>
                    }
                  </FormGroup>
                : null
              }
            </CardBody>
          </Card>
          : null
        }
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
                        dateFormat="DD/MM/YYYY"
                    />
                    {
                      !this.isDateValid()
                      ? null
                      : <p>Pick a date in the past</p>
                    }
                  </FormGroup>
                  <Button disabled={!this.isValid()} onClick={this.addChild}>Add Child</Button>
                </div>
              </CardBody>
            </Card>
          : null
        }
      </Container>
    )
  }
}

export default connect(state => state)(RelevantQuestions)
