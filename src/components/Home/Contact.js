import React, {Component} from 'react'
import { connect } from 'react-redux'


class Contact extends Component {
    render(){
        return(
            <div>
                <p>Contact us - Te Puia Hospital:</p>
                <p> 06 864 6803 </p>
                <br/>
                <p>Midwives </p>
                <p>NPH - Corrina Parata: 021 765053</p>
                <p>Independent - Lisa Anne: 021 1234567</p>
            </div>
        )
    }
}
export default Contact
