import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  Card,
  Container,
  CardTitle,
  CardBody,
  Button
} from 'reactstrap'

class UserInfo extends Component {

    checkUserName (name, value) {
        this.props.dispatch({
            type: 'HAS_NAME',
            payload: value
        })
    }

    render () {
        return(
            <Container>
                <Card>
                    <CardTitle>User Information</CardTitle>
                    <CardBody>
                        <input
                          type='text'
                          id='userName'
                          name='userName'
                          placeholder='Please Enter Your Name Here'
                          required
                        />
                        <br/>
                        <Button color="primary" onClick={()=> this.checkUserName('hasName', "A NAME AT SOME POINT")}>Next</Button>
                    </CardBody>
                </Card>
            </Container>
        )

    }
}
export default connect(state => state)(UserInfo)
