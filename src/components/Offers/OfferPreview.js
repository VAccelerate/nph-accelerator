import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  Card,
  CardBody,
  CardTitle,
  CardImg,
  CardSubtitle,
  CardText,
  Button,
  Container,
  Row,
  Col
} from 'reactstrap'

class OfferPreview extends Component {
  render () {
    return (
      <div>
        <Container>
          <Card>
            <CardBody>
              <Row>
                <Col xs="4">
                  <CardImg alt='logo' src={this.props.offerImg} />
                </Col>
                <Col xs="8">
                  <CardTitle>{this.props.offer.title}</CardTitle>
                  <CardSubtitle>{this.props.offer.disclaimer}</CardSubtitle>
                  <CardText>{this.props.offer.description}</CardText>
                </Col>
              </Row>
            </CardBody>
          </Card>
        </Container>
      </div>
    )
  }
}

export default connect(state => state)(OfferPreview)
