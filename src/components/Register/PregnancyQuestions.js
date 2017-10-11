import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  Card,
  CardTitle,
  CardBody,
  Button,
  FormGroup,
  Label
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

  handleSubmit (state) {
    const due = moment(state.dueDate).format('DD/MM/YYYY')
    let dueDate = moment(state.lmpDate).add(40, 'w')
    dueDate = moment(dueDate).format('DD/MM/YYYY')
    let payload = 'skipped'
    if (this.props.knowDueDate) {
      payload = due
    } else if (this.props.knowLmp) {
      payload = dueDate
    }
    console.log(payload)
    this.props.dispatch({
      type: 'DUE_DATE',
      payload: payload
    })
  }

  isContinueValid () {
    return true
  }

  checkIfKnowDueDate (name, value) {
    this.props.dispatch({
      type: 'KNOW_DUE_DATE',
      payload: value
    })
  }

  checkIfKnowLmp (value) {
    this.props.dispatch({
      type: 'KNOW_LMP',
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
  }

  lmpDate (date) {
    this.setState({
      lmpDate: date
    })
  }

  render () {
    const { isPregnant, knowDueDate, knowLmp } = this.props
    const yesButtonIdPregnancy = knowDueDate === true
      ? 'button-selected'
      : 'button-unselected'
    const noButtonIdPregnancy = knowDueDate === false
      ? 'button-selected'
      : 'button-unselected'
    const yesButtonIdLmp = knowLmp === true
      ? 'button-selected'
      : 'button-unselected'
    const noButtonIdLmp = knowLmp === false
      ? 'button-selected'
      : 'button-unselected'

    return (
      <div>
        {
          isPregnant === 'true'
          ? <Card className='question-card' id='pregnancy-questions-card'>
            <CardTitle className='question-phrase'>
                Do you know your due date?
              </CardTitle>
            <CardBody className='question-yes-no' id='question-pregnancy'>
              <Button
                className='button-yes-no'
                id={yesButtonIdPregnancy}
                name='knowDueDate'
                onClick={() => this.checkIfKnowDueDate('knowDueDate', true)}
                color=''
                outline
                >Yes</Button>
              <Button
                className='button-yes-no'
                id={noButtonIdPregnancy}
                name='knowDueDate'
                onClick={() => this.checkIfKnowDueDate('knowDueDate', false)}
                color=''
                outline
                >No</Button>
            </CardBody>
            <CardBody>
              {
                knowDueDate
                ? <FormGroup>
                  <Label for='dueDate' className='question-phrase'>
                    Enter your due date
                  </Label>
                  <DatePicker
                    className='date-picker'
                    selected={this.state.dueDate}
                    onChange={this.dueDate}
                    dateFormat='DD/MM/YYYY'
                  />
                  <Button
                    className='continue-button'
                    id='pregnancy-continue'
                    disabled={!this.isContinueValid()}
                    onClick={() => this.handleSubmit(this.state, this.props)}
                    color=''
                  >
                    Continue
                  </Button>
                </FormGroup>
                : null
              }
              {
                knowDueDate === false
                ? <FormGroup>
                  <Label
                    for='lmpDate'
                    className='question-phrase'
                    id='lmp-question-phrase'
                  >
                    Do you know when the first day of your last period was?
                  </Label>
                  <CardBody className='question-yes-no' id='question-pregnancy'>
                    <Button
                      className='button-yes-no'
                      id={yesButtonIdLmp}
                      name='knowLmp'
                      onClick={() => this.checkIfKnowLmp(true)}
                      color=''
                      outline
                    >Yes</Button>
                    <Button
                      className='button-yes-no'
                      id={noButtonIdLmp}
                      name='knowLmp'
                      onClick={() => this.handleSubmit(this.state, this.props)}
                      color=''
                      outline
                    >No</Button>
                  </CardBody>
                  {
                    knowLmp === null
                      ? null
                      : knowLmp
                        ? <FormGroup>
                          <Label for='dueDate' className='question-phrase'>
                            Enter your due date
                          </Label>
                          <DatePicker
                            className='date-picker'
                            selected={this.state.lmpDate}
                            onChange={this.lmpDate}
                            dateFormat='DD/MM/YYYY'
                          />
                          <Button
                            className='continue-button'
                            id='pregnancy-continue'
                            disabled={!this.isContinueValid()}
                            onClick={() => this.handleSubmit(this.state, this.props)}
                            color=''
                          >
                            Continue
                          </Button>
                        </FormGroup>
                        : null
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
