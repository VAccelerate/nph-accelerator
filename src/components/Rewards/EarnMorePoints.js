import React, { Component } from 'react'
import {
  Card,
  Container,
  CardTitle,
  CardBody,
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap'
import { Link } from 'react-router'


class EarnMorePoints extends Component {

    constructor(props) {
     super(props);
 }

    render () {

        const section = this.props.section

        function renderSubheader(subheader){
            return (
                <NavLink key={subheader.name}>{subheader.name}</NavLink>
            )
        }

        return(
            <Container>
                <Card>
                    <CardTitle>Earn more points</CardTitle>
                    <CardBody>
                        <li>Peas</li>
                        <li>Carrots</li>
                        <li>Eggplants</li>
                        <li>Tomacco</li>
                    </CardBody>
                </Card>
            </Container>
        )
    }


}
export default connect(state => state)(EarnMorePoints)
