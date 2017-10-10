import React, { Component } from 'react'
import {
  Card,
  Container,
  CardTitle,
  CardBody
} from 'reactstrap'

class HowToGetRewards extends Component {


        render () {
            return(
                <Container>
                        <h3>How do I get rewards?</h3>
                          <div className="htgr-list">
                            <li>Never gonna give you up</li>
                            <li>Never gonna let you down</li>
                            <li>Never gonna turn around</li>
                            <li>And hurt you</li>
                          </div>
                </Container>
            )
        }


}
export default HowToGetRewards
