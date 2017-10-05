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
import DatePicker from 'react-datepicker'
import moment from 'moment'
import 'react-datepicker/dist/react-datepicker.css'

class PregnancyQuestions extends Component {
  constructor (props) {
    super(props)
    this.handleChange = this.handleChange.bind(this)
    this.dueDate = this.dueDate.bind(this)
    this.lmpDate = this.lmpDate.bind(this)

    this.state = {
      dueDate: moment(),
      lmpDate: moment()
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
    let dueDate = moment(date).add(40, 'w')
    dueDate = moment(dueDate).format('DD/MM/YYYY')
    this.props.dispatch({
      type: 'DUE_DATE',
      payload: dueDate
    })
  }

  render () {
    return (
      <div>
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
      </div>
    )
  }
}

export default connect(state => state)(PregnancyQuestions)
