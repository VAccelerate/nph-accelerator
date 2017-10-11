import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  Card,
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
import hamburgerX from '../../img/hamburgerX.svg'

class ChildrenQuestions extends Component {
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
    const numberth = ['1st', '2nd', '3rd']
    const { children } = this.props
    return (
      <div>
        <Card className='question-card' id='pregnancy-questions-card'>
          <CardTitle className='question-phrase'>
              Enter your childs details
            </CardTitle>
          <CardBody>
            {
                this.props.children.map((child, key) => {
                  return (
                    <div>
                      <Card className='child-details' key={key}>
                        <div className='child-details-pair'>
                          <span className='child-details-key'>Name:</span>
                          <span className='child-details-value'>{child.name}</span>
                        </div>
                        <div className='child-details-pair'>
                          <span className='child-details-key'>Gender:</span>
                          <span className='child-details-value'>
                            {child.gender[0].toUpperCase() + child.gender.substring(1)}
                          </span>
                        </div>
                        <div className='child-details-pair'>
                          <span className='child-details-key'>DOB:</span>
                          <span className='child-details-value'>{child.dob}</span>
                        </div>
                        <div
                          className='child-details-delete'
                          onClick={() => this.deleteChild(key)}
                      >
                          <img className='X-img' src={hamburgerX} />
                        </div>
                      </Card>
                      {
                      child === children[children.length - 1]
                      ? (
                        <p className='question-phrase' id='nth-child-details'>
                          {numberth[children.length] || `${children.length}th`} childs details
                        </p>
                      )
                      : null
                    }
                    </div>
                  )
                })
              }
            <div>
              <FormGroup>
                <Input
                  type='text'
                  name='name'
                  id='name'
                  value={this.state.name}
                  placeholder='Name'
                  onChange={this.handleChange}
                />
              </FormGroup>
              <FormGroup>
                <Input
                  type='select'
                  name='gender'
                  value={this.state.gender}
                  id='gender-select'
                  onChange={this.handleChange}
                >
                  <option value='not specified'>Gender</option>
                  <option value='male'>Male</option>
                  <option value='female'>Female</option>
                  <option value='not specified'>Prefer not to answer</option>
                </Input>
              </FormGroup>
              <FormGroup>
                <Label
                  id='dob-question'
                  for='dob'
                  className='question-phrase'
                >Enter childs date of birth</Label>
                <DatePicker
                  className='date-picker'
                  selected={this.state.birthDate}
                  onChange={this.dob}
                  dateFormat='DD/MM/YYYY'
                />
              </FormGroup>
              <div className='add-child-section'>
                <span>
                  <Button
                    id='plus-button'
                    disabled={!this.isValid()}
                    onClick={this.addChild}
                    outline
                    color=''
                  >+</Button>
                </span>
                <span className='add-child-description'>
                Add another child
                </span>
              </div>
            </div>
          </CardBody>
          <Link to={'/home'}><Button
            className='continue-button'
            id='add-child-continue'
            color=''
            onClick={this.addChild}
          >
            Continue
          </Button></Link>
        </Card>
      </div>
    )
  }
}

export default connect(state => state)(ChildrenQuestions)
