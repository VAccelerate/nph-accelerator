import React, {Component} from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  Container,
  CarouselCaption
} from 'reactstrap'

import './userMessage.css'

const items = [
  {
    key: 'item1',
    src: 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7',
    altText: '',
    caption: 'Welcome to your Pepi Ora app. If you want to learn more, click the link below'
  },
  {
    key: 'item2',
    src: 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7',
    altText: '',
    caption: 'We notice we did not get your due date. That means you need to contact a midwife.'
  },
  {
    key: 'item3',
    src: 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7',
    altText: '',
    caption: "Today's top tip: Drinking during pregnancy can seriously harm your unborn baby"
  }
]

class UserMessage extends Component {
  constructor (props) {
    super(props)
    this.state = { activeIndex: 0 }
    this.next = this.next.bind(this)
    this.previous = this.previous.bind(this)
    this.goToIndex = this.goToIndex.bind(this)
    this.onExiting = this.onExiting.bind(this)
    this.onExited = this.onExited.bind(this)
  }

  onExiting () {
    this.animating = true
  }

  onExited () {
    this.animating = false
  }

  next () {
    if (this.animating) return
    const nextIndex = this.state.activeIndex === items.length - 1 ? 0 : this.state.activeIndex + 1
    this.setState({ activeIndex: nextIndex })
  }

  previous () {
    if (this.animating) return
    const nextIndex = this.state.activeIndex === 0 ? items.length - 1 : this.state.activeIndex - 1
    this.setState({ activeIndex: nextIndex })
  }

  goToIndex (newIndex) {
    if (this.animating) return
    this.setState({ activeIndex: newIndex })
  }

  render () {
    const { activeIndex } = this.state
    const { userName } = this.props

    const slides = items.map((item) => {
      return (
        <CarouselItem
          onExiting={this.onExiting}
          onExited={this.onExited}
          key={item.key}
          src={item.src}
          altText={item.altText}
        >
        <CarouselCaption captionText={item.caption} captionHeader={item.caption} />
        </CarouselItem>
      )
    })

    return (
      <Container className='carousel-container'>
        <h2 className='carousel-greeting'>"Kia Ora {userName}"</h2>
        <Carousel
          activeIndex={activeIndex}
          next={this.next}
          previous={this.previous}
        >
          <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={this.goToIndex} />
          {slides}
          <CarouselControl direction='prev' directionText='Previous' onClickHandler={this.previous} />
          <CarouselControl direction='next' directionText='Next' onClickHandler={this.next} />
        </Carousel>
        <div>
          {
            this.state.activeIndex === 0
            ? <Link to='/pepi-ora-help'><span className='carousel-link'>How to use the app ></span></Link>
            : null
          }
          {
            this.state.activeIndex === 1
            ? <Link to='/your-pregnancy/0'><span className='carousel-link'>Find out how ></span></Link>
            : null
          }
          {
            this.state.activeIndex === 2
            ? <Link to='/your-pregnancy'><span className='carousel-link'>See more tips ></span></Link>
            : null
          }
        </div>
      </Container>
    )
  }
}

export default connect(state => state)(UserMessage)
