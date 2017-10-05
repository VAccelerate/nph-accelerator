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

class RelevantQuestions extends Component {
  constructor (props) {
    super(props)
    this.handleChange = this.handleChange.bind(this)
    this.addChild = this.addChild.bind(this)
    this.state = {
      name: '',
      dob: '',
      gender: ''
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

  isValid () {
    if (this.state.name.length > 1 && this.state.gender !== '') {
      return true
    } else {
      return false
    }
  }

  // dueDate (date) {
  //   console.log(date, 'date')
  //   this.props.dispatch({
  //     type: 'DUE_DATE',
  //     payload: 'date'
  //   })
  // }

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
                  <Input type='date' name='date' id='dueDate' value='' ref='date' placeholder='2017-01-10' />
                </FormGroup>
                : null
              }
              {
                this.props.knowDueDate === false
                ? <FormGroup>
                  <Label for='lmpDate'>Do you the first day of your last period?</Label>
                  <Input type='date' name='date' id='lmpDate' value='' ref='date' placeholder='2017-01-10' />
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
                          {child.child.name}
                        </h4>
                        <p>{child.child.gender}, DoB: {child.child.dob}</p>
                        <Button >Edit</Button>
                        <Button >Remove</Button>
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
                    <Label for='birthDate'>Date of birth</Label>
                    <Input type='date' name='dob' id='birthDate' value='' ref='date' placeholder='2017-01-10' />
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
