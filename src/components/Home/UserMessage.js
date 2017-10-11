import React, {Component} from 'react'
import { connect } from 'react-redux'
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  Container
} from 'reactstrap'

const items = [
  {
    key: 'item1',
    src: '',
    altText: 'hello things are still here'
  },
  {
    key: 'item2',
    src: '',
    altText: 'Slide 2'
  },
  {
    key: 'item3',
    src: '',
    altText: 'Slide 3'
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
    const { hasName } = this.props

    const slides = items.map((item) => {
      return (
        <CarouselItem
          onExiting={this.onExiting}
          onExited={this.onExited}
          key={item.key}
          src={item.src}
          altText={item.altText}
        />
      )
    })

    return (
      <Container>
        <h2>Kia Ora {hasName}</h2>
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
      </Container>
    )
  }
}

export default connect(state => state)(UserMessage)
