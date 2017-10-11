import React, {Component} from 'react'
import {
  Container,
  Card,
  CardTitle,
  CardText,
  Row,
  Col
} from 'reactstrap'
import { Link } from 'react-router-dom'
import angleLink from '../../img/darkAngle/angle@2x.png'
import './linkBlockButton.css'

class LinkBlockButton extends Component {
  render () {
    const linkContent = this.props.linkContent

    function insertContent (content) {
      return (
        <Link to={content.link}>
          <Container>
            <Card className='button'>
              <Row>
                <Col xs='10'>
                  <CardTitle className='button-title'>{content.title}</CardTitle>
                  <CardText className='button-descText'>{content.descText}</CardText>
                </Col>
                <Col xs='2'>
                  <img className='button-chevron' src={angleLink} alt='' />
                </Col>
              </Row>
            </Card>
          </Container>
        </Link>
      )
    }

    return (
      <div>
        {insertContent(linkContent)}
      </div>
    )
  }
}
export default LinkBlockButton
