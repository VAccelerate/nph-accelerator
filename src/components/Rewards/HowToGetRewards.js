import React, { Component } from 'react'
import {
  Card,
  Container,
  CardTitle,
  CardBody,
} from 'reactstrap'

class HowToGetRewards extends Component {


        render () {
            return(
                <Container>
                    <Card>
                        <CardTitle>How do I get rewards?</CardTitle>
                        <CardBody>
                            <li>Never gonna give you up</li>
                            <li>Never gonna let you down</li>
                            <li>Never gonna turn around</li>
                            <li>And hurt you</li>
                        </CardBody>
                    </Card>
                </Container>
            )
        }


}
export default HowToGetRewards
